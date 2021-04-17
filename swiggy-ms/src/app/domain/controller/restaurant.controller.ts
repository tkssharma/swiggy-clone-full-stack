import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, 
  ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PARAMETERS_FAILED_VALIDATION, RESULTS_RETURNED } from '../../constants.api';
import { CreateRestaurantParam, RestaurantParamById, RestaurantSearchParam, UpdateRestaurantParam } from '../dto/restaurant.dto';
import RestaurantService from '../services/restaurant.service';

@Controller('/api/v1/restaurants')
@ApiBearerAuth('authorization')
@UsePipes(new ValidationPipe({
  whitelist: true,
  transform: true,
}))
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) { }

  @ApiTags('Restaurant')
  @ApiOperation({ description: 'get all Restaurant by uuid' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Get('/')
  public async getAllRestaurant() {
    try {
      return await this.restaurantService.getAll();
    } catch (err) {
      throw err;
    }
  }

  @ApiTags('Restaurant')
  @ApiOperation({ description: 'get all Restaurant by uuid' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Get('/search')
  public async getAllRestaurantBySerach(@Query() params: RestaurantSearchParam) {
    try {
      return await this.restaurantService.getDataBySearch(params);
    } catch (err) {
      throw err;
    }
  }
  @ApiTags('Restaurant')
  @ApiOperation({ description: 'get a Restaurant by uuid' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Get('/:id')
  public async getRestaurantById(@Param() params: RestaurantParamById) {
    try {
      return await this.restaurantService.getById(params.id);
    } catch (err) {
      throw err;
    }
  }

  @ApiTags('Restaurant')
  @ApiOperation({ description: 'create new Restaurant' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been fetched successfully' })
  @Post('/')
  public async createRestaurantById(@Body() data: CreateRestaurantParam) {
    try {
      return await this.restaurantService.create(data);
    } catch (err) {
      throw err;
    }
  }
  
  @ApiTags('Restaurant')
  @ApiOperation({ description: 'update Restaurant' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @ApiInternalServerErrorResponse({ description: 'data has been updated successfully' })
  @Put('/')
  public async updateRestaurant(@Body() data: UpdateRestaurantParam) {
     try {
        return await this.restaurantService.update(data);
     }catch(err){
       throw err;
     }
  }

  @ApiTags('Restaurant')
  @ApiOperation({ description: 'delete Restaurant' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOkResponse({ description: RESULTS_RETURNED })
  @ApiBadRequestResponse({ description: PARAMETERS_FAILED_VALIDATION })
  @Delete('/:id')
  public async deleteRestaurant(@Param() params: RestaurantParamById) {
     try {
        return await this.restaurantService.delete(params);
     }catch(err){
       throw err;
     }
  }
}