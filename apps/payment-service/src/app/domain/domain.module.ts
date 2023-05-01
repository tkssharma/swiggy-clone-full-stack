import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { ConfigModule } from "@swiggy/config";
import { AppLoggerModule } from "@swiggy/logger";
import { DBModule } from "@swiggy/database";

import { TypeOrmModule } from "@nestjs/typeorm";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { AuthModule } from "@swiggy/auth";
import { PaymentController } from "./payment/controller/payment.controller";
import { PaymentService } from "./payment/services/payment.service";
import { PaymentEntity } from "./payment/entity/payment.entity";
import { ClientsModule, Transport } from "@nestjs/microservices";
@Module({
  imports: [
    ClientsModule.register([
      {
        name: "PAYMENT_LISTENER_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://guest:guest@localhost:5672/admin"],
          queue: "payment-messages",
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    AuthModule,
    EventEmitterModule.forRoot(),
    TypeOrmModule.forFeature([PaymentEntity]),
    DBModule.forRoot({
      entities: [PaymentEntity],
    }),
    TerminusModule,
    AppLoggerModule,
    ConfigModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class DomainModule {}
