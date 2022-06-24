import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CalorieModule } from 'src/calories/calorie.module';
import { FatModule } from 'src/fat/fat.module';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]), CalorieModule, FatModule],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService],
})
export class UsersModule {}
