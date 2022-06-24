import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalorieService } from 'src/calories/calorie.service';
import { CarbohydrateService } from 'src/carbohydrate/carbohydrate.service';
import { FatService } from 'src/fat/fat.service';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly calorieService: CalorieService,
        private readonly fatService: FatService,
        private readonly carbohydrateService: CarbohydrateService
    ) {}

    async create(userDto: UserDto) {
        const user = this.userRepository.create(userDto);
        const calorie = await this.calorieService.create();
        const fat = await this.fatService.create();
        const carbohydrate = await this.carbohydrateService.create();
        user.calorie = calorie;
        user.fat = fat;
        user.carbohydrate = carbohydrate
        return await this.userRepository.save(user);
    }

    async getByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: {
                email: email
            },
            relations: {
                calorie: true,
                fat: true,
                carbohydrate: true
            }
        });
        return user;
    }

    async getUserByID(id: string){
        return await this.userRepository.findOne({
            where: {
                id: id
            },
            relations: {
                calorie: true,
                fat: true,
                carbohydrate: true
            }
        });
    }
}
