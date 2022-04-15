import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('FamilyController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/family (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/family')
      .expect(200)
  });
  // it('/api/family/${ID} (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/api/family')
  //     .expect(200)
  // });
  // it('/api/family (POST)', () => {
  //   return request(app.getHttpServer())
  //     .get('/api/family')
  //     .expect(200)
  // });
  // it('/api/family (PUT)', () => {
  //   return request(app.getHttpServer())
  //     .get('/api/family')
  //     .expect(200)
  // });
});
