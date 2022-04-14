import { Family } from '../entities';

export class CreateFamilyResponseDto {
  success: boolean;

  createdFamily: Family;
}
