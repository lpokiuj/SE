import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FatDto } from './dto/fat.dto';
import { FatEntity } from './entities/fat.entity';

@Injectable()
export class FatService {
    constructor(
        @InjectRepository(FatEntity)
        private readonly fatRepository: Repository<FatEntity>
    ){}

    async getByID(id: string){
        return await this.fatRepository.findOneBy({ id: id });
    }

    async create(){
        const fat = {
            fat: 0
        }
        const newFat = this.fatRepository.create(fat);
        return await this.fatRepository.save(newFat);
    }

    async update(id: string, fatDto: FatDto){
        const fat = await this.fatRepository.findOneBy({ id: id });
        fat.fat+=fatDto.fat;
        return await this.fatRepository.save(fat);
    }


}
