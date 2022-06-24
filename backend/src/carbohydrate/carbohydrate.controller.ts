import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CarbohydrateService } from './carbohydrate.service';
import { CarbohydrateDto } from './dto/carbohydrate.dto';

@UseGuards(JwtAuthGuard)
@Controller('carbohydrate')
export class CarbohydrateController {
    constructor(private readonly carbohydrateService: CarbohydrateService) {}

    @Get(':id')
    async getByID(@Param('id') id: string){
      return await this.carbohydrateService.getByID(id);
    }

    @Patch(':id')
    async update(@Body() carbohydrateDto: CarbohydrateDto, @Param('id') id: string){
      return await this.carbohydrateService.update(id, carbohydrateDto);
    }
}
