import { ConflictException, Injectable } from "@nestjs/common";
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

@Injectable()
export class RestaurantService {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(RestaurantEntity)
    private restaurantRepo: Repository<RestaurantEntity>,
    private readonly connection: Connection,
    private configService: ConfigService,
    private eventEmitter: EventEmitter2
  ) {}

  async getRestaurantById(param: getRestaurantByIdDto) {
    const { id } = param;
    return await this.restaurantRepo.find({
      where: { id },
      relations: ["dishes"],
    });
  }

  async getAllMyRestaurants(user: UserMetaData) {
    const { uid } = user;
    return await this.restaurantRepo.find({
      where: { owner_id: uid },
      relations: ["dishes"],
    });
  }

  async search(query: SearchQueryDto) {}

  async createRestaurant(user: UserMetaData, payload: CreateRestaurantBodyDto) {
    let createdRestaurant = null;
    console.log(payload);
    const queryRunner = this.connection.createQueryRunner();
    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();

      createdRestaurant = await this.createUserRestaurant(
        payload,
        user,
        queryRunner
      );
      await this.createAddress(payload.address, createdRestaurant, queryRunner);
      await queryRunner.commitTransaction();
      return createdRestaurant;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
  async createUserRestaurant(
    payload,
    user: UserMetaData,
    queryRunner: QueryRunner
  ) {
    return await queryRunner.manager.save(RestaurantEntity, {
      owner_id: user.uid,
      ...payload,
    });
  }
  async createAddress(address: AddressDto, restaurant, queryRunner) {
    return await queryRunner.manager.save(RestaurantAddressEntity, {
      ...address,
      restaurant: restaurant,
    });
  }
}
