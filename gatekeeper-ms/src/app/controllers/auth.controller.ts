import { Controller, Get, Req, UnauthorizedException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Request } from 'express';
import * as CONSTANT from '../constants.api';
import { AuthService } from '../services/firebase.service';

@ApiBearerAuth('authorization')
@ApiTags('Auth')
@Controller('/api/v1')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @ApiBadRequestResponse({ schema: { example: { statusCode: 400, message: CONSTANT.MISSING_AUTH_HEADER, error: 'Bad Request' } } })
    @ApiUnauthorizedResponse({   schema: { example: { statusCode: 401, message: CONSTANT.INVALID_AUTH_TOKEN, error: 'Unauthorized' } } })
    @ApiOkResponse({ schema: { example: { isAuthenticate: true, status: 200 } } })
    @Get('authenticate')
    public async authenticate(@Req() req: Request): Promise<any> {
        const authToken = req.headers.authorization;
        if (!authToken) {
            throw new BadRequestException(CONSTANT.MISSING_AUTH_HEADER);
        }
        try {
            return await this.authService.authenticate(authToken);
        } catch (err) {
            throw new UnauthorizedException(err.message);
        }
    }
}
