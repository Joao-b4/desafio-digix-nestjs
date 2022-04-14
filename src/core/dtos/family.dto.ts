import { IsString, IsNotEmpty, IsNumber, IsArray, IsBoolean } from 'class-validator';
import { OmitType, PartialType, } from '@nestjs/mapped-types';

export class CreateFamilyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsArray()
  members: Array<CreateFamilyMemberDto>;
  
  @IsNumber()
  @IsNotEmpty()
  financeTotal: number;
}

export class CreateFamilyMemberDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsBoolean()
  dependent: boolean;
}

export class UpdateFamilyDto extends PartialType(OmitType(CreateFamilyDto, ['members'] as const)) {
  @IsNotEmpty()
  @IsArray()
  members: Array<UpdateFamilyMemberDto>;
}

export class UpdateFamilyMemberDto extends CreateFamilyMemberDto {
}