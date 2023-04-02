import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Car } from '../entities/cars.entity';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async createCar(@Body() car: Car): Promise<Car> {
    return this.carsService.create(car);
  }

  @UseGuards(AuthGuard)
  @Get('all')
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }
}
