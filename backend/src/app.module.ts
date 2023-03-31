import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'db',
        port: 3306,
        username: 'root',
        password: 'example',
        database: 'mydatabase',
        entities: ["dist/**/*.entity.js"],
        synchronize: true,
      }),
    }),
    ProfileModule,
    CarsModule,
  ],
  controllers: [AppController, ProfileController, CarsController],
  providers: [AppService],
})
export class AppModule {}
