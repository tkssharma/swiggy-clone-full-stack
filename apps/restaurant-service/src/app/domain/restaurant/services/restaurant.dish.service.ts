import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfigService } from "@swiggy/config";
import { Logger } from "@swiggy/logger";
import { Like, Repository, Connection, QueryRunner } from "typeorm";

import { NotFoundException } from "@nestjs/common";
import { RestaurantEntity } from "../entity/restaurant.entity";
import {
  AddressDto,
  CreateRestaurantBodyDto,
  SearchQueryDto,
  getRestaurantByIdDto,
} from "../dto/restaurant.dto";
import { RestaurantAddressEntity } from "../entity/restaurant.address.entity";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { UserMetaData } from "@swiggy/auth";
import { RestaurantDishEntity } from "../entity/restaurant.dish.entity";
import { CreateRestaurantDishBodyDto } from "../dto/restaurant.dish.dto";

@Injectable()
export class RestaurantDishService {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(RestaurantEntity)
    private restaurantRepo: Repository<RestaurantEntity>,
    @InjectRepository(RestaurantDishEntity)
    private restaurantDishRepo: Repository<RestaurantDishEntity>,
    private configService: ConfigService,
    private eventEmitter: EventEmitter2
  ) {}

  async validateAuthorization(user, param) {
    const { uid } = user;
    const { id } = param;
    const restaurant = await this.restaurantRepo.findOne({ where: { id } });
    if (!restaurant) {
      throw new NotFoundException(`restaurant not found with id ${id}`);
    }
    if (restaurant.owner_id !== uid) {
      throw new UnauthorizedException(
        `you are not authorized to access restaurant${id}`
      );
    }
    return restaurant;
  }

  async createRestaurantDish(
    user: UserMetaData,
    param: getRestaurantByIdDto,
    payload: CreateRestaurantDishBodyDto
  ) {
    const restaurant = await this.validateAuthorization(user, param);
    return await this.restaurantDishRepo.save({
      ...payload,
      restaurant,
    });
  }
}
