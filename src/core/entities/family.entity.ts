export class Family {
  name: string;
  members: Array<FamilyMember>;
  financeTotal: number;
  points: number;
}

export class FamilyMember{
  name: string;
  age: number;
  dependent: boolean;
}