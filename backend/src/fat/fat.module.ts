import { Module } from '@nestjs/common';
import { FatService } from './fat.service';
import { FatController } from './fat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FatEntity } from './entities/fat.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FatEntity])],
    controllers: [FatController],
    providers: [FatService],
    exports: [FatService]
})
export class FatModule {}
