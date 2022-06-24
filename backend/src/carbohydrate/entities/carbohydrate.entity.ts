import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CarbohydrateEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: 0 })
    carbohydrate: number;
}
