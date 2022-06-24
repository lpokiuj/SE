import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProteinEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: 0 })
    protein: number;
}
