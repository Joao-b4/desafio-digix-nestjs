import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services/data-services.module';
import { FamilyFactoryService } from './family-factory.service';
import { FamilyServices } from './family-services.service';

@Module({
  imports: [DataServicesModule],
  providers: [FamilyFactoryService, FamilyServices],
  exports: [FamilyFactoryService, FamilyServices],
})
export class FamilyServicesModule {}
