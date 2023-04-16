import { ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'dv_invoice' })
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.invoices)
  user: User;

  @Column()
  total_money: number;

  @Column()
  userId?: number;

  @Column({ nullable: true })
  create_date?: Date;

  @Column({ nullable: true })
  update_date?: Date;

  @Column({ default: 1 })
  active_flg?: number;

  @Column({ default: 0 })
  status?: number;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

}