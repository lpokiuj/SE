import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalorieDto } from './dto/calorie.dto';
import { CalorieEntity } from './entities/calorie.entity';

@Injectable()
export class CalorieService {
    constructor(
        @InjectRepository(CalorieEntity)
        private readonly calorieRepository: Repository<CalorieEntity>
    ){}

    async getByID(id: string){
        return await this.calorieRepository.findOneBy({ id: id });
    }

    async create(){
        const calorie = {
          calorie: 0
        }
        const newCalorie = this.calorieRepository.create(calorie);
        return await this.calorieRepository.save(newCalorie);
    }

    async update(id: string, calorieDto: CalorieDto){
        const calorie = await this.calorieRepository.findOneBy({ id: id });
        calorie.calorie+=calorieDto.calorie
        return await this.calorieRepository.save(calorie);
    }
}
