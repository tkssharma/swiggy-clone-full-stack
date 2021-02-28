import { ObjectUnsubscribedErrorCtor } from "rxjs/internal/util/ObjectUnsubscribedError";
import { Column, CreateDateColumn, Entity, ManyToOne, ObjectLiteral, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Restaurant from './restaurant.entity';

@Entity({ name: 'address' })

export default class Address {

  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 255 })
  public street_address!: string;

  @Column({ type: 'varchar', length: 255 })
  public house_no!: string;

  @Column({ type: 'varchar', length: 255})
  public postal_code!: string;

  @Column({ type: 'varchar', length: 255 })
  public state!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  public landmark!: string;

  @Column({ type: 'varchar', length: 255 })
  public city!: string;

  @Column({ type: 'jsonb', nullable: true })
  public position!: object;

  @ManyToOne(() => Restaurant, event => event.address)
  public restaurant_address!: Restaurant;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false })
  public updated_at!: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false })
  public created_at!: Date;

}