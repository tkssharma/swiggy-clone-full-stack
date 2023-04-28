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
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { FirebaseAuthGuard, User, UserMetaData } from "@swiggy/auth";
import { CreateAddressDto, userAddressByIdDto } from "../dto/user-request.dto";
import { UserAddressService } from "../services/user.address.service";

@ApiBearerAuth("authorization")
@Controller("users")
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  })
)
@ApiTags("addresses")
export class UserAddressController {
  constructor(private readonly service: UserAddressService) {}

  @UseGuards(FirebaseAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ description: "address create api " })
  @ApiConsumes("application/json")
  @Post("/addresses")
  public async CreateUserAddress(
    @Body() body: CreateAddressDto,
    @User() user: UserMetaData
  ) {
    return this.service.create(body, user);
  }

  @UseGuards(FirebaseAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ description: "address create api " })
  @ApiConsumes("application/json")
  @Put("/addresses/:id")
  public async UpdateUserAddress(
    @Body() body: CreateAddressDto,
    @Param() param: userAddressByIdDto,
    @User() user: UserMetaData
  ) {
    return this.service.update(param, user, body);
  }

  @UseGuards(FirebaseAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ description: "address create api " })
  @ApiConsumes("application/json")
  @Delete("/addresses/:id")
  public async deleteUserAddress(
    @Param() param: userAddressByIdDto,
    @User() user: UserMetaData
  ) {
    return this.service.delete(param, user);
  }

  @UseGuards(FirebaseAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ description: "address list api" })
  @ApiConsumes("application/json")
  @Get("/addresses")
  public async fetchAllAddress(@User() user: UserMetaData) {
    return this.service.fetchAllAddress(user);
  }
}
