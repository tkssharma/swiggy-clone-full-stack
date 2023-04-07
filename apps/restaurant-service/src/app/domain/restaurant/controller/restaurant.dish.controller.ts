// Native.
/* eslint-disable no-useless-escape */

// Package.
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from "@nestjs/swagger";
import { Logger } from "@swiggy/logger";
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NO_ENTITY_FOUND,
  UNAUTHORIZED_REQUEST,
} from "src/app/app.constants";
import { RestaurantService } from "../services/restaurant.service";
import { Type } from "class-transformer";
import {
  CreateRestaurantBodyDto,
  SearchQueryDto,
  getRestaurantByIdDto,
} from "../dto/restaurant.dto";
import {
  CheckAuthorization,
  FirebaseAuthGuard,
  User,
  UserMetaData,
} from "@swiggy/auth";
import { CreateRestaurantDishBodyDto } from "../dto/restaurant.dish.dto";
import { RestaurantDishService } from "../services/restaurant.dish.service";

@ApiBearerAuth("authorization")
@Controller("restaurants")
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  })
)
@ApiTags("restaurant-dish")
export class RestaurantDishController {
  constructor(
    private readonly service: RestaurantDishService,
    private readonly logger: Logger
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @ApiConsumes("application/json")
  @ApiNotFoundResponse({ description: NO_ENTITY_FOUND })
  @ApiForbiddenResponse({ description: UNAUTHORIZED_REQUEST })
  @ApiUnprocessableEntityResponse({ description: BAD_REQUEST })
  @ApiInternalServerErrorResponse({ description: INTERNAL_SERVER_ERROR })
  @UseGuards(FirebaseAuthGuard)
  @Post("/:id/dish")
  public async createRestaurantDish(
    @User() user: UserMetaData,
    @Param() param: getRestaurantByIdDto,
    @Body() payload: CreateRestaurantDishBodyDto
  ) {
    console.log(user);
    return await this.service.createRestaurantDish(user, param, payload);
  }
}
