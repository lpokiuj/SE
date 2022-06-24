import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CalorieEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: 0 })
    calorie: number;
}
