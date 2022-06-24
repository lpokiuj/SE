import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FatDto } from './dto/fat.dto';
import { FatService } from './fat.service';

@UseGuards(JwtAuthGuard)
@Controller('fat')
export class FatController {
    constructor(private readonly fatService: FatService) {}

    @Get(':id')
    async getByID(@Param('id') id: string){
        return await this.fatService.getByID(id);
    }

    @Patch(':id')
    async update(@Body() fatDto: FatDto, @Param('id') id: string){
        return await this.fatService.update(id, fatDto);
    }
}
