import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '../../../config/config.service';

@Injectable()
export default class AuthorizationService {
    private gatekeeperServiceUrl?: string;
    constructor(
        private configService: ConfigService,
    ) {
        this.gatekeeperServiceUrl = this.configService.get().gatekeeperServiceUrl;
    }

    public async authorizeRequest(token: string): Promise<any> {
        const url = `${this.gatekeeperServiceUrl}/api/v1/authenticate`;
        return (await axios.get(url, {
            headers: {
                authorization: `${token}`,
            }
        }));
    }
  }