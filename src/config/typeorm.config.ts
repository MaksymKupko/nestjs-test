import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

export function isProd() {
  return process.env.NODE_ENV === 'production';
}

export const TYPEORM_CONFIG = 'typeorm';

export function getDefaultTypeormConfig(): DataSourceOptions &
  TypeOrmModuleOptions {
  return {
    type: 'postgres',
    url: process.env.TYPEORM_DB_URL,
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    // synchronize: !isProd(),
    synchronize: true,
    entities: ['src/modules/**/entities/*.entity.ts'],
    autoLoadEntities: true,
    subscribers: [],
    migrations: ['src/**/migrations/*.ts'],
    migrationsRun: false,
    // depends on config on deployment service
    ssl: process.env.DATABASE_URL ? true : false,
  };
}

export default registerAs(TYPEORM_CONFIG, () => getDefaultTypeormConfig());
