import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfigService } from "@swiggy/config";
import { Logger } from "@swiggy/logger";
import { Like, Repository, Connection, QueryRunner } from "typeorm";

import { NotFoundException } from "@nestjs/common";
import { OrderEntity } from "../entity/order.entity";

import { EventEmitter2 } from "@nestjs/event-emitter";
import { UserMetaData } from "@swiggy/auth";
import { CreatePaymentBodyDto } from "../dto/order.dto";

@Injectable()
export class OrderService {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(OrderEntity)
    private orderRepo: Repository<OrderEntity>
  ) {}

  async createOrder(user: UserMetaData, payload: CreatePaymentBodyDto) {
    const items = payload.menu_items;
    let totalAmount = 0;
    items.forEach((i) => {
      totalAmount = totalAmount + i.count * i.price;
    });
    return this.orderRepo.save({
      user_id: user.uid,
      amount: totalAmount,
      address_id: payload.address_id,
      restaurant_id: payload.restaurant_id,
      menu_items: payload.menu_items,
      status: "draft",
    });
  }
}
