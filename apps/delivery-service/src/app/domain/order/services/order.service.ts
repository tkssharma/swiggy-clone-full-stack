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
import { CartEntity } from "../entity/order.entity";
import {
  CreateCartMenuItemBodyDto,
  MenuItemBodyDto,
  UpdateCartMenuItemBodyDto,
} from "../dto/order.dto";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { UserMetaData } from "@swiggy/auth";

@Injectable()
export class CartService {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(CartEntity)
    private cartRepo: Repository<CartEntity>,
    private eventEmitter: EventEmitter2
  ) {}

  async createCartMenuItem(
    user: UserMetaData,
    payload: CreateCartMenuItemBodyDto
  ) {
    const { restaurant_id } = payload;

    const existingCart = await this.cartRepo.findOne({
      where: {
        restaurant_id,
        user_id: user.uid,
      },
    });
    let items: MenuItemBodyDto[] = [];
    if (existingCart) {
      items = existingCart.menu_items;
      items.push(payload.menu_item);
      existingCart.menu_items = items;
      return await existingCart.save();
    } else {
      items.push(payload.menu_item);
      return await this.cartRepo.save({
        user_id: user.uid,
        restaurant_id: restaurant_id,
        menu_items: items,
      });
    }
  }

  async updateCartMenuItem(
    user: UserMetaData,
    payload: UpdateCartMenuItemBodyDto
  ) {
    const { uid } = user;
    const { restaurant_id, menu_item } = payload;
    const existingCart = await this.cartRepo.findOne({
      where: {
        restaurant_id,
        user_id: uid,
      },
    });
    if (!existingCart) {
      throw new NotFoundException();
    } else {
      const updatedMenuItems = existingCart.menu_items.map((i) => {
        if (i.id === menu_item.id) {
          return payload.menu_item;
        }
        return i;
      });
      existingCart.menu_items = updatedMenuItems;
      return await existingCart.save();
    }
  }
  async deleteCartMenuItem(
    user: UserMetaData,
    payload: UpdateCartMenuItemBodyDto
  ) {
    const { uid } = user;
    const { restaurant_id, menu_item } = payload;
    const existingCart = await this.cartRepo.findOne({
      where: {
        restaurant_id,
        user_id: uid,
      },
    });
    if (!existingCart) {
      throw new NotFoundException();
    } else {
      const updatedMenuItems = existingCart.menu_items.filter(
        (i) => i.id !== menu_item.id
      );
      existingCart.menu_items = updatedMenuItems;
      return await existingCart.save();
    }
  }
  async clearCartMenuItem(user: UserMetaData) {
    const { uid } = user;
    const item = await this.cartRepo.findOne({
      where: {
        user_id: uid,
      },
    });
    await this.cartRepo.delete({ id: item.id });
    return null;
  }

  async listUserCart(user: UserMetaData) {
    const { uid } = user;
    return await this.cartRepo.findOne({
      where: {
        user_id: uid,
      },
    });
  }
}
