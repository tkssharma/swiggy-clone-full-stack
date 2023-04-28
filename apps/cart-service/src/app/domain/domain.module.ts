import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { ConfigModule } from "@swiggy/config";
import { AppLoggerModule } from "@swiggy/logger";
import { DBModule } from "@swiggy/database";

import { TypeOrmModule } from "@nestjs/typeorm";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { AuthModule } from "@swiggy/auth";
import { CartEntity } from "./cart/entity/cart.entity";
import { CartController } from "./cart/controller/cart.controller";
import { CartService } from "./cart/services/cart.service";
@Module({
  imports: [
    AuthModule,
    EventEmitterModule.forRoot(),
    TypeOrmModule.forFeature([CartEntity]),
    DBModule.forRoot({
      entities: [CartEntity],
    }),
    TerminusModule,
    AppLoggerModule,
    ConfigModule,
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class DomainModule {}
