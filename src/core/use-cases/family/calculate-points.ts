import { Family, FamilyMember } from "src/core/entities";

export class CalculateTotalPoints {
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
  