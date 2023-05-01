import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  OnModuleInit,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfigService } from "@swiggy/config";
import { Logger } from "@swiggy/logger";
import { Like, Repository, Connection, QueryRunner } from "typeorm";
import Stripe from "stripe";

import { NotFoundException } from "@nestjs/common";
import { PaymentEntity } from "../entity/payment.entity";

import { EventEmitter2 } from "@nestjs/event-emitter";
import { UserMetaData } from "@swiggy/auth";
import { CreatePaymentBodyDto, UpdatePaymentBodyDto } from "../dto/payment.dto";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class PaymentService implements OnModuleInit {
  private stripe;
  constructor(
    @Inject("PAYMENT_LISTENER_SERVICE") private readonly client: ClientProxy,
    private readonly logger: Logger,
    @InjectRepository(PaymentEntity)
    private payRepo: Repository<PaymentEntity>
  ) {
    this.stripe = new Stripe(process.env.STRIPE_API_SECRET_KEY, {
      apiVersion: "2022-11-15",
    });
  }
  async onModuleInit() {
    try {
      await this.client.connect();
    } catch (err) {
      console.log(err);
    }
  }

  async updatePayment(user: UserMetaData, payload: UpdatePaymentBodyDto) {
    const payment = await this.payRepo.findOne({
      where: {
        order_id: payload.order_id,
      },
    });
    if (!payload) {
      throw new NotFoundException();
    }
    payment.status = payload.status;
    this.client.emit<any>("payment_status_updated", {
      order_id: payload.order_id,
      status: payload.status,
    });
    return await payment.save();
  }
  async createPayment(user: UserMetaData, payload: CreatePaymentBodyDto) {
    const items = payload.menu_items;
    let totalAmount = 0;
    items.forEach((i) => {
      totalAmount = totalAmount + i.count * i.price;
    });

    await this.payRepo.save({
      user_id: user.uid,
      restaurant_id: payload.restaurant_id,
      menu_items: payload.menu_items,
      order_id: payload.order_id,
      amount: totalAmount,
      status: "in_progress",
    });

    return this.stripe.paymentIntents.create({
      amount: totalAmount,
      currency: "usd",
    });
  }
}
