import { Repository } from 'typeorm';
import { Car } from '../entities/cars.entity';
export declare class CarsService {
    private readonly carRepository;
    constructor(carRepository: Repository<Car>);
    findAll(): Car[] | PromiseLike<Car[]>;
    create(car: Car): Promise<Car>;
}
