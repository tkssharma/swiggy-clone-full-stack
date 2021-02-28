import { Module } from '@nestjs/common';

import { ConfigModule } from '../config/config.module';
import { DomainModule } from './domain/domain.module';

import { AppController } from './controllers/app.controller';

@Module({
  imports: [ConfigModule, DomainModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
