import { ConfigData } from './config.interface';

export const DEFAULT_CONFIG: ConfigData = {
  env: 'production',
  db: {
    url: process.env.DATABASE_URL,
  },
  gatekeeperServiceUrl: '',
  logLevel: 'info',
  newRelicKey: '',
};
