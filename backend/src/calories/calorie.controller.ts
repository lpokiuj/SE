import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalorieService } from './calorie.service';
import { CalorieDto } from './dto/calorie.dto';

@Controller('calorie')
export class CalorieController {
    constructor(private readonly calorieService: CalorieService) {}

@Get(':id')
    async getByID(@Param('id') id: string){
        return await this.calorieService.getByID(id);
    }

    @Patch(':id')
    async update(@Body() calorieDto: CalorieDto, @Param('id') id: string){
        return await this.calorieService.update(id, calorieDto);
    }
}
