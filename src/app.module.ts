import { Module } from '@nestjs/common';
import {
  FamilyController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { FamilyServicesModule } from './services/use-cases/family/family-services.module';

@Module({
  imports: [
    DataServicesModule,
    FamilyServicesModule
  ],
  controllers: [
    FamilyController
  ],
  providers: [],
})
export class AppModule {}
