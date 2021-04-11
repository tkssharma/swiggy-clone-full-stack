import { Injectable } from '@nestjs/common';
import { urlJoin } from 'url-join-ts';
import { DEFAULT_CONFIG } from './config.default';
import { ConfigData, ConfigDBData } from './config.interface';

/**
 * Provides a means to access the application configuration.
 */
@Injectable()
export class ConfigService {
  private config: ConfigData;

  constructor(data: ConfigData = DEFAULT_CONFIG) {
    this.config = data;
  }

  /**
   * Loads the config from environment variables.
   */
  public loadFromEnv() {
    this.config = this.parseConfigFromEnv(process.env);
  }

  private parseConfigFromEnv(env: NodeJS.ProcessEnv): ConfigData {
    return {
      env: env.NODE_ENV || DEFAULT_CONFIG.env,
      db: this.parseDbConfigFromEnv(env, DEFAULT_CONFIG.db),
      logLevel: env.LOG_LEVEL || DEFAULT_CONFIG.logLevel,
      newRelicKey: env.NEW_RELIC_KEY || DEFAULT_CONFIG.newRelicKey,
      gatekeeperServiceUrl: env.GATEKEEPER_SERVICE_URL || DEFAULT_CONFIG.gatekeeperServiceUrl,

    };
  }
  private parseDbConfigFromEnv(env: NodeJS.ProcessEnv, defaultConfig: Readonly<ConfigDBData>): ConfigDBData {
    return {
      url: env.DATABASE_URL || defaultConfig.url,
    };
  }
  /**
   * Retrieves the config.
   * @returns immutable view of the config data
   */
  public get(): Readonly<ConfigData> {
    return this.config;
  }
}
