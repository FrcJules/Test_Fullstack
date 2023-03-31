import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../entities/cars.entity';

@Injectable()
export class CarsService {

  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  findAll(): Car[] | PromiseLike<Car[]> {
    return this.carRepository.find();
  }

  async create(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }
}
