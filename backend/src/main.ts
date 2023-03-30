import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mysql from 'mysql2/promise';

async function db_connect() {
  const db = await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'mydatabase',
  });
  return db;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  await app.listen(4000);

  const db = await db_connect();
  console.log('Connected to database:', db.config.database);
}

bootstrap();