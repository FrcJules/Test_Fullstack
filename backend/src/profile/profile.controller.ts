import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('form')
@UseGuards(AuthGuard)
export class ProfileController {
  @Get()
  getProfile() {
    console.log('getProfile');
    return { message: 'This is your profile.' };
  }
}