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
  let isDbInitialized = false;
  if (!isDbInitialized) {
    await db.execute('INSERT INTO user (username, password) VALUES ("user1", "password1"), ("user2", "password2"), ("user3", "password3");');
    isDbInitialized = true;
    console.log('Initialized database');
  }
  
}

bootstrap();