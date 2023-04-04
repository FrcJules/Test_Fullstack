import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOne(username: string): Promise<User>;
    findAll(): Promise<User[]>;
}
