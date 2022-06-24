import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProteinDto } from './dto/protein,dto';
import { ProteinEntity } from './entities/protein.entity';

@Injectable()
export class ProteinService {
    constructor(
        @InjectRepository(ProteinEntity)
        private readonly proteinRepository: Repository<ProteinEntity>
    ){}

    async getByID(id: string){
        return await this.proteinRepository.findOneBy({ id: id });
    }

    async create(){
        const protein = {
            protein: 0
        }
        const newProtein = this.proteinRepository.create(protein);
        return await this.proteinRepository.save(newProtein);
    }

    async update(id: string, proteinDto: ProteinDto){
        const protein = await this.proteinRepository.findOneBy({ id: id });
        protein.protein+=proteinDto.protein;
        return await this.proteinRepository.save(protein);
    }

}
