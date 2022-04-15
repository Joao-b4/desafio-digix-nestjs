import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateFamilyDto, UpdateFamilyDto, CreateFamilyResponseDto } from '../dtos';
import { FamilyServices } from '../../../core/use-cases/family';
import { FamilyFactoryService } from '../factory';

@Controller('api/family')
export class FamilyController {
  constructor(
    private familyServices: FamilyServices,
    private familyFactoryService: FamilyFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.familyServices.getAllFamilies();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.familyServices.getFamilyById(id);
  }

  @Post()
  async createFamily(@Body() familyDto: CreateFamilyDto) {
    const createFamilyResponse = new CreateFamilyResponseDto();
    try {
      const family = this.familyFactoryService.createNewFamily(familyDto);
      const createdFamily = await this.familyServices.createFamily(family);

      createFamilyResponse.success = true;
      createFamilyResponse.createdFamily = createdFamily;
    } catch (error) {
      createFamilyResponse.success = false;
    } 

    return createFamilyResponse;
  }

  @Put(':id')
  updateFamily(
    @Param('id') familyId: string,
    @Body() updateFamilyDto: UpdateFamilyDto,
  ) {
    const family = this.familyFactoryService.updateFamily(updateFamilyDto);
    return this.familyServices.updateFamily(familyId, family);
  }
}
