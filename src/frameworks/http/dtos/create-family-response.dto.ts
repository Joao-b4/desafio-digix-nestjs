import { Family } from '../../../core/entities';

export class CreateFamilyResponseDto {
  success: boolean;

  createdFamily: Family;
}
