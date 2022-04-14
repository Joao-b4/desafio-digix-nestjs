import { Injectable } from "@nestjs/common";
import { Family, FamilyMember } from "../../../core/entities";
import { IDataServices } from "../../../core/abstracts";

@Injectable()
export class FamilyServices {
  constructor(private dataServices: IDataServices) {}

  async getAllFamilies(): Promise<Family[]> {
    const families = await this.dataServices.families.getAll();
    const familiesWithPointsCalculated = families.map((family: Family) =>
      (new CalculateTotalPoints(family).call())
    );
    const familiesOrdenadeByPoints = familiesWithPointsCalculated.sort((familyA, familyB)=>(familyA.points > familyB.points ? -1 : 1))
    return familiesOrdenadeByPoints;
  }

  async getFamilyById(id: any): Promise<Family> {
    const family = await this.dataServices.families.get(id);
    const familyWithPointsCalculated = new CalculateTotalPoints(family).call();
    return familyWithPointsCalculated;
  }

  async createFamily(family: Family): Promise<Family> {
    try {
      const createdFamily = await this.dataServices.families.create(family);

      return createdFamily;
    } catch (error) {
      throw error;
    }
  }

  updateFamily(familyId: string, family: Family): Promise<Family> {
    try {
      const updatedFamily = this.dataServices.families.update(familyId, family);

      return updatedFamily;
    } catch (error) {
      throw error;
    }
  }
}

class CalculateTotalPoints {
  constructor(private family: Family) {}

  private calculatePointsFromFinanceTotal() {
    let points = 0;

    if (this.family.financeTotal <= 900) {
      points += 5;
    } else if (
      this.family.financeTotal >= 901 &&
      this.family.financeTotal <= 1500
    ) {
      points += 3;
    }
    return points;
  }

  private calculatePointsFromDependents() {
    let points = 0;

    const totalMembersDependent = this.family.members
      .map((member: FamilyMember) => {
        if (member.age <= 18 && member.dependent) {
          return member;
        }
      })
      .filter((item) => !!item);

    if (totalMembersDependent.length == 0) {
      return points
    }

    if (totalMembersDependent.length > 0 && totalMembersDependent.length <= 2) {
      points += 2;
    } else {
      points += 3;
    }
    return points;
  }

  call(){
    this.family.points = 0
    this.family.points += this.calculatePointsFromFinanceTotal()
    this.family.points += this.calculatePointsFromDependents()
    return this.family
  }
}
