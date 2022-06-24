import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarbohydrateDto } from './dto/carbohydrate.dto';
import { CarbohydrateEntity } from './entities/carbohydrate.entity';

@Injectable()
export class CarbohydrateService {
    constructor(
        @InjectRepository(CarbohydrateEntity)
        private readonly carbohydrateRepository: Repository<CarbohydrateEntity>
    ){}

    async getByID(id: string){
        return await this.carbohydrateRepository.findOneBy({ id: id });
    }

    async create(){
        const carbohydrate = {
            carbohydrate: 0
        }
        const newCarbohydrate = this.carbohydrateRepository.create(carbohydrate);
        return await this.carbohydrateRepository.save(newCarbohydrate);
    }

    async update(id: string, carbohydrateDto: CarbohydrateDto){
        const carbohydrate = await this.carbohydrateRepository.findOneBy({ id: id });
        carbohydrate.carbohydrate+=carbohydrateDto.carbohydrate;
        return await this.carbohydrateRepository.save(carbohydrate);
    }
}
