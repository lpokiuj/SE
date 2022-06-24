import { Module } from '@nestjs/common';
import { CarbohydrateService } from './carbohydrate.service';
import { CarbohydrateController } from './carbohydrate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarbohydrateEntity } from './entities/carbohydrate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarbohydrateEntity])],
  controllers: [CarbohydrateController],
  providers: [CarbohydrateService],
  exports: [CarbohydrateService]
})
export class CarbohydrateModule {}
