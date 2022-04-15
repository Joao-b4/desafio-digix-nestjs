import { Module } from '@nestjs/common';
import { DataServicesModule } from '../frameworks/data-services/data-services.module';
import { FamilyFactoryService } from '../frameworks/http/factory/family-factory.service';
import { FamilyServices } from '../core/use-cases/family/family-services.service';

@Module({
  imports: [DataServicesModule],
  providers: [FamilyFactoryService, FamilyServices],
  exports: [FamilyFactoryService, FamilyServices],
})
export class FamilyServicesModule {}
