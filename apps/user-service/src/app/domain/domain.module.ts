import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { ConfigModule } from "@swiggy/config";
import { AppLoggerModule } from "@swiggy/logger";
import { DBModule } from "@swiggy/database";

import { TypeOrmModule } from "@nestjs/typeorm";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { AuthModule } from "@swiggy/auth";
import { UserAddressEntity } from "./address/entity/user.address.entity";
import { UserAddressController } from "./address/controller/user.address.controller";
import { UserAddressService } from "./address/services/user.address.service";
@Module({
  imports: [
    AuthModule,
    EventEmitterModule.forRoot(),
    TypeOrmModule.forFeature([UserAddressEntity]),
    DBModule.forRoot({
      entities: [UserAddressEntity],
    }),
    TerminusModule,
    AppLoggerModule,
    ConfigModule,
  ],
  controllers: [UserAddressController],
  providers: [UserAddressService],
})
export class DomainModule {}
