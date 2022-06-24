import { Module } from '@nestjs/common';
import { CalorieService } from './calorie.service';
import { CalorieController } from './calorie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalorieEntity } from './entities/calorie.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CalorieEntity])],
    controllers: [CalorieController],
    providers: [CalorieService],
    exports: [CalorieService]
})
export class CalorieModule {}
