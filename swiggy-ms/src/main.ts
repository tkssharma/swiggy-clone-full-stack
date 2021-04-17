require('dotenv').config()
import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { createDocument } from './swagger/swagger';
const LISTEN_PORT = 3000;

async function bootstrap() {
  const opts: NestApplicationOptions = {logger: true, cors: true };
  const app = await NestFactory.create(AppModule, opts);
  SwaggerModule.setup('/api/v1', app, createDocument(app));
  await app.listen(process.env.PORT || LISTEN_PORT);
}
bootstrap();
