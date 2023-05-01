import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { ConfigModule } from "@swiggy/config";
import { AppLoggerModule } from "@swiggy/logger";
import { DBModule } from "@swiggy/database";

import { TypeOrmModule } from "@nestjs/typeorm";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { AuthModule } from "@swiggy/auth";
import { OrderController } from "./order/controller/order.controller";
import { OrderService } from "./order/services/order.service";
import { OrderEntity } from "./order/entity/order.entity";
@Module({
  imports: [
    AuthModule,
    EventEmitterModule.forRoot(),
    TypeOrmModule.forFeature([OrderEntity]),
    DBModule.forRoot({
      entities: [OrderEntity],
    }),
    TerminusModule,
    AppLoggerModule,
    ConfigModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class DomainModule {}
