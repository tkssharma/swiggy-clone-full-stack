import { Module } from '@nestjs/common';

import { LoggerModule } from '../logger/logger.module';
import { AppController } from './controllers/app.controller';
import { CacheModule } from '../redis/cache.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/firebase.service';

@Module({
  imports: [

LoggerModule,
    CacheModule
  ],
  providers: [AuthService],
  controllers: [AppController, AuthController]
})
export class AppModule { }
