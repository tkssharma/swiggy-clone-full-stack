/**
 * Configuration for the database connection.
 */
export interface ConfigDBData {
  url?: string;
}

/**
 * Configuration data for the app.
 */
export interface ConfigData {
  /**
   * The name of the environment.
   * @example 'production'
   */
  env: string;

  /** Database connection details. */
  db: ConfigDBData;

  /**
   * The log level to use.
   * @example 'verbose', 'info', 'warn', 'error'
   */
  logLevel: string;

  /** The New Relic key to use. */
  newRelicKey?: string;
  gatekeeperServiceUrl?: string;
}
