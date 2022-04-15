import { Module } from '@nestjs/common';
import {
  FamilyController,
} from './frameworks/http/controllers';
import { DataServicesModule } from './frameworks/data-services';
import { FamilyServicesModule } from './modules';

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
