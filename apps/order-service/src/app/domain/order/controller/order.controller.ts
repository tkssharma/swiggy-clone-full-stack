// Native.
/* eslint-disable no-useless-escape */

// Package.
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
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
import { CartService } from "../services/order.service";
import { Type } from "class-transformer";
import { FirebaseAuthGuard, User, UserMetaData } from "@swiggy/auth";
import {
  CreateCartMenuItemBodyDto,
  UpdateCartMenuItemBodyDto,
} from "../dto/order.dto";

@ApiBearerAuth("authorization")
@Controller("cart")
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  })
)
@ApiTags("cart")
export class CartController {
  constructor(
    private readonly service: CartService,
    private readonly logger: Logger
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @ApiConsumes("application/json")
  @ApiNotFoundResponse({ description: NO_ENTITY_FOUND })
  @ApiForbiddenResponse({ description: UNAUTHORIZED_REQUEST })
  @ApiUnprocessableEntityResponse({ description: BAD_REQUEST })
  @ApiInternalServerErrorResponse({ description: INTERNAL_SERVER_ERROR })
  @UseGuards(FirebaseAuthGuard)
  @Post("/")
  public async addMenuItemToCart(
    @User() user: UserMetaData,
    @Body() payload: CreateCartMenuItemBodyDto
  ) {
    return await this.service.createCartMenuItem(user, payload);
  }

  @HttpCode(HttpStatus.OK)
  @ApiConsumes("application/json")
  @ApiNotFoundResponse({ description: NO_ENTITY_FOUND })
  @ApiForbiddenResponse({ description: UNAUTHORIZED_REQUEST })
  @ApiUnprocessableEntityResponse({ description: BAD_REQUEST })
  @ApiInternalServerErrorResponse({ description: INTERNAL_SERVER_ERROR })
  @UseGuards(FirebaseAuthGuard)
  @Get("/")
  public async listUserCart(@User() user: UserMetaData) {
    return await this.service.listUserCart(user);
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiConsumes("application/json")
  @ApiNotFoundResponse({ description: NO_ENTITY_FOUND })
  @ApiForbiddenResponse({ description: UNAUTHORIZED_REQUEST })
  @ApiUnprocessableEntityResponse({ description: BAD_REQUEST })
  @ApiInternalServerErrorResponse({ description: INTERNAL_SERVER_ERROR })
  @UseGuards(FirebaseAuthGuard)
  @Put("/")
  public async updateUserCart(
    @User() user: UserMetaData,
    @Body() payload: UpdateCartMenuItemBodyDto
  ) {
    return await this.service.updateCartMenuItem(user, payload);
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiConsumes("application/json")
  @ApiNotFoundResponse({ description: NO_ENTITY_FOUND })
  @ApiForbiddenResponse({ description: UNAUTHORIZED_REQUEST })
  @ApiUnprocessableEntityResponse({ description: BAD_REQUEST })
  @ApiInternalServerErrorResponse({ description: INTERNAL_SERVER_ERROR })
  @UseGuards(FirebaseAuthGuard)
  @Delete("/")
  public async deleteUserMenuItemCart(
    @User() user: UserMetaData,
    @Body() payload: UpdateCartMenuItemBodyDto
  ) {
    return await this.service.deleteCartMenuItem(user, payload);
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiConsumes("application/json")
  @ApiNotFoundResponse({ description: NO_ENTITY_FOUND })
  @ApiForbiddenResponse({ description: UNAUTHORIZED_REQUEST })
  @ApiUnprocessableEntityResponse({ description: BAD_REQUEST })
  @ApiInternalServerErrorResponse({ description: INTERNAL_SERVER_ERROR })
  @UseGuards(FirebaseAuthGuard)
  @Delete("/clear")
  public async clearUserCart(@User() user: UserMetaData) {
    return await this.service.clearCartMenuItem(user);
  }
}
