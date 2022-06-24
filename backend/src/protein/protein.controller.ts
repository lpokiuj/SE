import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProteinDto } from './dto/protein,dto';
import { ProteinService } from './protein.service';

@UseGuards(JwtAuthGuard)
@Controller('protein')
export class ProteinController {
    constructor(private readonly proteinService: ProteinService) {}
    
    @Get(':id')
    async getByID(@Param('id') id: string){
        return await this.proteinService.getByID(id);
    }

    @Patch(':id')
    async update(@Body() proteinDto: ProteinDto, @Param('id') id: string){
        return await this.proteinService.update(id, proteinDto);
    }

}
