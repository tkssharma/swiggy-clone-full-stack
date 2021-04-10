import * as dotenv from 'dotenv';
dotenv.config();
import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import * as admin from 'firebase-admin';
import { AppModule } from './app/app.module';
import { createDocument } from './swagger/swagger';


async function bootstrap() {
  const opts: NestApplicationOptions = {};
  admin.initializeApp({
    credential: admin.credential.cert({
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      project_id: process.env.FIREBASE_PROJECT_ID
    } as Partial<admin.ServiceAccount>),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  });
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('api/v1', app, createDocument(app));
  await app.listen(process.env.PORT || 3000 );

}
export default admin;
bootstrap();
