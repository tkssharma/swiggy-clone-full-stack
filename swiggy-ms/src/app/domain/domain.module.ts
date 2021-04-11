import { MiddlewareConsumer, Module, NestModule, RequestMethod, Type } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { ConfigModule } from '../../config/config.module';
import { DbModule } from '../../db/db.module';
import { AuthMiddleware } from '../core/middleware/auth.middleware';
import AuthorizationService from '../core/services/authorization.service';
import { RestaurantMenuController } from './controller/restaurant-menu.controller';
import { RestaurantController } from './controller/restaurant.controller';

export const ALL_ENTITIES = fs
  .readdirSync(path.join(path.dirname(__filename), 'entities'))
  .filter((file) => (path.extname(file) === '.js' || path.extname(file) === '.ts') && !file.endsWith('.d.ts'))
  .map((file) => require(`./entities/${file}`).default as Type<any>);

export const ALL_SERVICES = fs
  .readdirSync(path.join(path.dirname(__filename), 'services'))
  .filter((file) => (path.extname(file) === '.js' || path.extname(file) === '.ts') && !file.endsWith('.d.ts'))
  .filter((file) => file.indexOf('.spec') === -1)
  .map((file) => require(`./services/${file}`).default as Type<any>);

@Module({
  imports: [ConfigModule, DbModule.forRoot({ entities: ALL_ENTITIES }), TypeOrmModule.forFeature(ALL_ENTITIES)],
  controllers: [RestaurantController, RestaurantMenuController],
  providers: [...ALL_SERVICES, AuthorizationService],
  exports: [...ALL_SERVICES]
})
export class DomainModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '/api/v1', method: RequestMethod.ALL });
  }
}