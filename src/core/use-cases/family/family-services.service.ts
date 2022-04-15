import { Injectable } from "@nestjs/common";
import { Family } from "../../entities";
import { IDataServices } from "../../abstracts";
import { CalculateTotalPoints } from "./calculate-points";

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

