import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { FirebaseAuthStrategy } from "./auth.strategy";
import { ConfigModule } from "@swiggy/config";
@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: "firebase-auth" }),
  ],
  providers: [FirebaseAuthStrategy],
  exports: [PassportModule, FirebaseAuthStrategy],
})
export class AuthModule {}
