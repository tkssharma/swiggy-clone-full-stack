import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CreateRestaurantMenuParam, CreateRestaurantParam, RestaurantMenuParamById, RestaurantParamById } from "../dto/restaurant.dto";
import Menu from "../entities/menu.entity";
import Restaurant from "../entities/restaurant.entity";

@Injectable()
export default class RestaurantMenuService {
  constructor(
    @InjectRepository(Restaurant) private restaurantRepo: Repository<Restaurant>,
    @InjectRepository(Menu) private menuRepo: Repository<Menu>
  ) { }

  public async create(params: RestaurantParamById, data: CreateRestaurantMenuParam): Promise<Menu> {
    try {
      const restaurant = await this.restaurantRepo.findOne({ where: {id: params.id }});
      if(! restaurant) {
        throw new NotFoundException(`restaurant with uuid ${params.id} not found`)
      }
      const menu = this.menuRepo.create();
      const payload = {...menu, ...data};
      payload.restaurant = restaurant;
      return await this.menuRepo.save(payload)
    } catch (err) {
      throw err;
    }
  }
  public async getAllMenu(params: RestaurantParamById ): Promise<Menu[]> {
    return this.menuRepo.find({ where : { restaurant: params.id}});
  }
  public async getMenuById(params: RestaurantMenuParamById): Promise<Menu | undefined> {
    const {id, menuId} = params;
    return this.menuRepo.findOne({ where: { id: menuId, Restaurant: id } });
  }

  public async getById(id: string): Promise<Restaurant | undefined> {
    return this.restaurantRepo.findOne({ where: { id } });
  }
  public async delete(params: RestaurantMenuParamById): Promise<DeleteResult> {
    const {id, menuId} = params;
    const restaurant = await this.restaurantRepo.findOne({ where: {id}});
      if(! restaurant) {
        throw new NotFoundException(`restaurant with uuid ${params.id} not found`)
      }
    const menu = await this.menuRepo.findOne({where: { id: menuId}});
    if (menu) {
      return await this.menuRepo.delete(menuId)
    }
    throw new NotFoundException('Invalid Id Provided for menu');
  }
}