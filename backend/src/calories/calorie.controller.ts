import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CalorieService } from './calorie.service';
import { CalorieDto } from './dto/calorie.dto';

@UseGuards(JwtAuthGuard)
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
