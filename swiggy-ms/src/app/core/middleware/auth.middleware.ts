import { Injectable, NestMiddleware, HttpStatus, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NextFunction, Request, Response } from 'express';
import AuthorizationService from '../services/authorization.service';

export interface UserMetaData extends Request {
  user: any;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  constructor(private authorizationService: AuthorizationService) { }

  async use(req: UserMetaData, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new HttpException({ message: 'Token Not Provided, Token Authorization Failed' },
        HttpStatus.UNAUTHORIZED);
    }
    try {
      const { data } = await this.authorizationService.authorizeRequest(authorization);
      if (data.email && data.uid) {
        req.user = data;
      }
      next();
    } catch (err) {
      throw new HttpException({ message: 'Token Authorization Failed' }, HttpStatus.UNAUTHORIZED);
    }
  }

}