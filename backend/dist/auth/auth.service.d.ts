import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    verifyToken(token: string): void;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: any, pass: any): Promise<{
        access_token: string;
    }>;
}
