import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ProfileController } from './profile.controller';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  imports: [AuthModule],
  controllers: [ProfileController],
  providers: [AuthGuard],
})
export class ProfileModule {}