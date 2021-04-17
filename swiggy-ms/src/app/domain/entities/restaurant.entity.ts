import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./address.entity";
import Menu from "./menu.entity";

@Entity({name: 'restaurant'})

export default class Restaurant {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column({ type: 'varchar', length:255, unique: true})
    public name!: string;

    @Column({ type: 'varchar', length:255, nullable: true})
    public website!: string;

    @Column({ type: 'varchar', length:255, nullable: true})
    public type!: string;

    @Column({ type: 'varchar', length:255, nullable: true})
    public rating!: string;

    @Column({ type: 'varchar', length:255, nullable: true})
    public average_time!: string;

    @Column({ type: 'varchar', length:255, nullable: true})
    public average_cost!: string;

    @Column({ type: 'varchar', length:255, nullable: true})
    public logo_url!: string;

    @Column({ type: 'varchar'})
    public about_us!: string;

    @OneToMany(() => Menu, event => event.restaurant )
    public restaurant_menu!: Menu []

    @OneToMany(() => Address, event => event.restaurant_address )
    public address!: Address []

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public created_at!: Date;
  
    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public updated_at!: Date;

}