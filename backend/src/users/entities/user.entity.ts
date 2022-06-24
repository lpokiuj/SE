import { CalorieEntity } from 'src/calories/entities/calorie.entity';
import { CarbohydrateEntity } from 'src/carbohydrate/entities/carbohydrate.entity';
import { FatEntity } from 'src/fat/entities/fat.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => CalorieEntity)
    @JoinColumn()
    calorie: CalorieEntity;

    @OneToOne(() => FatEntity)
    @JoinColumn()
    fat: FatEntity;

    @OneToOne(() => CarbohydrateEntity)
    @JoinColumn()
    carbohydrate: CarbohydrateEntity;
}
