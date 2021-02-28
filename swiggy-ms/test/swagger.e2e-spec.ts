import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import * as request from 'supertest';
import { promises as fs } from 'fs';

import { createDocument } from './../src/swagger/swagger';
import { AppModule } from '../src/app/app.module';

describe('Swagger (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    SwaggerModule.setup('api', app, createDocument(app));
    await app.init();
  });

  afterEach(async () => {
    await app.close();
    try {
      await fs.unlink('./test/tmp.db');
    } catch (err) { }
  });

  it('/api (GET)', () => {
    return request(app.getHttpServer())
      .get('/api')
      .expect(301)
      .expect('location', '/api/');
  });

  it('/api/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/')
      .expect(200)
      .responseType('text/html');
  });
});
