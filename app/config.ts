import { IApplicationConfig, LogLevels } from 'axe-api';

const config: IApplicationConfig = {
  prefix: 'api',
  env: process.env.NODE_ENV || 'production',
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
  logLevel: LogLevels.INFO,
  database: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};

export default config;
