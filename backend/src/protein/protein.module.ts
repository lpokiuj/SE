import { Module } from '@nestjs/common';
import { ProteinService } from './protein.service';
import { ProteinController } from './protein.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProteinEntity } from './entities/protein.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProteinEntity])],
    controllers: [ProteinController],
    providers: [ProteinService],
    exports: [ProteinService]
})
export class ProteinModule {}
