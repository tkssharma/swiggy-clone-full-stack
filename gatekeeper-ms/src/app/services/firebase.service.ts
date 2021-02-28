import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as CONSTANT from '../constants.api';
import admin from '../../main';
import { Logger } from '../../logger/logger';


@Injectable()
export class AuthService {
    constructor(
        private logger: Logger
    ) { }
    private getToken(authToken: string): string {
        const match = authToken.match(/^Bearer (.*)$/);
        if (!match || match.length < 2) {
            throw new UnauthorizedException(CONSTANT.INVALID_BEARER_TOKEN);
        }
        return match[1];
    }

    public async authenticate(authToken: string): Promise<any> {
        const tokenString = this.getToken(authToken);
        try {
            const decodedToken: admin.auth.DecodedIdToken =
             await admin.auth().verifyIdToken(tokenString);
            const data = { email: decodedToken.email, uid: decodedToken.uid };
            this.logger.info(`${JSON.stringify(decodedToken)}`);
            return data;
        } catch (err) {
            this.logger.error(`error while authenticate request ${err.message}`)
            throw new UnauthorizedException(err.message);
        }
    }
}
