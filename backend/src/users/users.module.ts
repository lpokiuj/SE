import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CalorieModule } from 'src/calories/calorie.module';
import { FatModule } from 'src/fat/fat.module';
import { CarbohydrateModule } from 'src/carbohydrate/carbohydrate.module';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]), CalorieModule, FatModule, CarbohydrateModule],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService],
})
export class UsersModule {}
