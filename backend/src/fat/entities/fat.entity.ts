import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FatEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: 0 })
    fat: number;
}
