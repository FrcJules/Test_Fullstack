import { Car } from '../entities/cars.entity';
import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    createCar(car: Car): Promise<Car>;
    findAll(): Promise<Car[]>;
}
