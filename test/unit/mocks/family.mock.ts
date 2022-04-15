import { Family, FamilyMember } from "../../../src/core"

export class FamilyMemberMock extends FamilyMember {
    _id: string
}
export class FamilyMock extends Family {
    _id: string
}

const familyMemberMock1 = new FamilyMember()
familyMemberMock1.age = 12
familyMemberMock1.dependent= true
familyMemberMock1.name = "samuel test"

const familyMemberMock2 = new FamilyMember()
familyMemberMock2.age = 20
familyMemberMock2.dependent= false
familyMemberMock2.name = "gabriel test"

const familyMemberMock3 = new FamilyMember()
familyMemberMock3.age = 14
familyMemberMock3.dependent= true
familyMemberMock3.name = "enzo test"

const familyMemberMock4 = new FamilyMember()
familyMemberMock4.age = 16
familyMemberMock4.dependent= true
familyMemberMock4.name = "rafaela test"

const familyMock1 = new FamilyMock()
familyMock1.financeTotal = 800
familyMock1.name = "test1 family"
familyMock1.members = [familyMemberMock1, familyMemberMock2]

const familyMock2 = new FamilyMock()
familyMock2.financeTotal = 1700
familyMock2.name = "test2 family"
familyMock2.members = [familyMemberMock1, familyMemberMock2, familyMemberMock3, familyMemberMock4]

export {
    familyMock1,
    familyMock2,
}