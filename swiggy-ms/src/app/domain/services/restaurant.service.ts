import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { AddressDto, CreateRestaurantParam, RestaurantParamById, UpdateRestaurantParam } from "../dto/restaurant.dto";
import Address from "../entities/address.entity";
import Restaurant from "../entities/restaurant.entity";


@Injectable()
export default class RestaurantService {
  constructor(
    @InjectRepository(Restaurant) private restaurantRepo: Repository<Restaurant>,
    @InjectRepository(Address) private addressRepo: Repository<Address>
  ) { }

  public async create(data: CreateRestaurantParam): Promise<Restaurant> {
    try {
      const existingRestaurant = await this.restaurantRepo.findOne({where: {name: data.name}});
      if(existingRestaurant) {
        existingRestaurant.about_us = data.about_us;
        existingRestaurant.name = data.name;
        existingRestaurant.website = data.website;
        const restaurant = await this.restaurantRepo.save(existingRestaurant);
        return restaurant;
      } else {
        const restaurant = this.restaurantRepo.create();
        restaurant.about_us = data.about_us;
        restaurant.name = data.name;
        restaurant.website = data.website;
        const newRestaurant = await this.restaurantRepo.save(restaurant);
        await this.createAddress(data.address, newRestaurant);
        return newRestaurant;
      }
    } catch (err) {
      throw err;
    }
  }
  public async createAddress(addressData: AddressDto, restaurant: Restaurant): Promise<any> {
    try {
      const address = this.addressRepo.create();
      const payload = { ...address, ...addressData };
      payload.restaurant_address = restaurant;
      return await this.addressRepo.save(payload);
    } catch (err) {
      throw err;
    }
  }
  public async getAll(): Promise<Restaurant[]> {
    return this.restaurantRepo.find({ relations: ['address','restaurant_menu']});
  }
  private async findById(id: string): Promise<Restaurant | undefined> {
    return this.restaurantRepo.findOne({ where: { id } });
  }
  public async getById(id: string): Promise<Restaurant | undefined> {
    return this.restaurantRepo.findOne({ where: { id } });
  }
  public async delete(data: RestaurantParamById): Promise<DeleteResult> {
    const Restaurant = await this.findById(data.id);
    if (Restaurant) {
      return await this.restaurantRepo.delete(data.id)
    }
    throw new NotFoundException('Invalid Id Provided');
  }

  public async update(data: UpdateRestaurantParam): Promise<Restaurant> {
    const Restaurant = await this.findById(data.id);
    if (Restaurant) {
      Restaurant.name = data.name;
      Restaurant.website = data.website;
      Restaurant.about_us = data.about_us;
      return this.restaurantRepo.save(Restaurant);
    }
    throw new NotFoundException('Invalid Id Provided');
  }
}