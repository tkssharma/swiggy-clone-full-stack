import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/firebase.service';

@Module({
  imports: [
  ],
  providers: [AuthService],
  controllers: [AppController, AuthController],
})
export class AppModule { }
