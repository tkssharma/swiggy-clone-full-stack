import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Restaurant from './restaurant.entity';

@Entity({name: 'menu'})

export default class Menu {

    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column({ type: 'varchar', length:255})
    public name!: string;

    @Column({ type: 'varchar', length:255})
    public type!: string;

    @Column({ type: 'varchar', length:255})
    public meal_type!: string;

      @Column({ type: 'varchar', length:255})
    public media!: string;

      @Column({ type: 'varchar', length:255})
    public banner!: string;

    @Column({ type: 'varchar', length:255})
    public price!: string;

    @Column({ type: 'varchar',  length:255})
    public cuisine_type!: string;

    @Column({ type: 'varchar'})
    public desc!: string;

    @ManyToOne(() => Restaurant, event => event.restaurant_menu)
    public restaurant!: Restaurant;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public updated_at!: Date;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public created_at!: Date;

}