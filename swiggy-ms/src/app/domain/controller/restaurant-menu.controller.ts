import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth,
   ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PARAMETERS_FAILED_VALIDATION, RESULTS_RETURNED } from '../../constants.api';
import { CreateRestaurantMenuParam, RestaurantMenuParamById, RestaurantParamById } from '../dto/restaurant.dto';
import RestaurantMenuService from '../services/restaurant-menu.service';

@Controller('/api/v1/restaurants')
@ApiBearerAuth('authorization')
@UsePipes(new ValidationPipe({
  whitelist: true,
  transform: true,
}))
export class RestaurantMenuController {
  constructor(private readonly menuService: RestaurantMenuService) { }

  @ApiTags('RestaurantMenu')
  @ApiOperation({ description: 'get all RestaurantMenu by uuid' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Get('/:id/menus')
  public async getAllRestaurantMenu(@Param() params: RestaurantParamById) {
    try {
      return this.menuService.getAllMenu(params);
    } catch (err) {
      throw err;
    }
  }
  @ApiTags('RestaurantMenu')
  @ApiOperation({ description: 'get a RestaurantMenu by uuid' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Get('/:id/menus/:menuId')
  public async getRestaurantMenuById(@Param() params: RestaurantMenuParamById) {
    try {
      return this.menuService.getMenuById(params);
    } catch (err) {
      throw err;
    }
  }

  @ApiTags('RestaurantMenu')
  @ApiOperation({ description: 'create new RestaurantMenu' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Post('/:id/menu')
  public async createRestaurantMenuById(@Param() params: RestaurantParamById,
                                        @Body() data: CreateRestaurantMenuParam) {
    try {
      return this.menuService.create(params, data);
    } catch (err) {
      throw err;
    }
  }
}
