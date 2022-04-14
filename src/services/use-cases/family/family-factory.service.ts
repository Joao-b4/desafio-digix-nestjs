import { Injectable } from '@nestjs/common';
import { Family, FamilyMember } from '../../../core/entities';
import { CreateFamilyDto, CreateFamilyMemberDto, UpdateFamilyDto, UpdateFamilyMemberDto } from '../../../core/dtos';

@Injectable()
export class FamilyFactoryService {
  createNewFamily(createFamilyDto: CreateFamilyDto) {
    const newFamily = new Family();
    newFamily.name = createFamilyDto.name;
    newFamily.financeTotal = createFamilyDto.financeTotal;
    newFamily.members = createFamilyDto.members.map(member => this.createNewFamilyMember(member));

    return newFamily;
  }

  updateFamily(updateFamilyDto: UpdateFamilyDto) {
    const newFamily = new Family();
    newFamily.name = updateFamilyDto.name;
    newFamily.financeTotal = updateFamilyDto.financeTotal;
    newFamily.members = updateFamilyDto.members.map(member => this.updateNewFamilyMember(member));

    return newFamily;
  }

  private createNewFamilyMember(member: CreateFamilyMemberDto){
    const newFamilyMember = new FamilyMember();
    newFamilyMember.name = member.name;
    newFamilyMember.age = member.age;
    newFamilyMember.dependent = member.dependent;

    return newFamilyMember;
  }

  private updateNewFamilyMember(member: UpdateFamilyMemberDto){
    const newFamilyMember = new FamilyMember();
    newFamilyMember.name = member.name;
    newFamilyMember.age = member.age;
    newFamilyMember.dependent = member.dependent;

    return newFamilyMember;
  }
}
