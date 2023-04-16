import { Category } from './category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'dv_product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price?: number;

  @Column()
  image?: string;

  @Column()
  size?: string;

  @Column()
  unit?: string;

  @Column()
  weight?: string;

  @Column()
  description?: string;

  @Column({ default: 1 })
  active_flg?: number;

  @Column({ default: 1 })
  status?: number;

  @Column({ nullable: true })
  
  create_date?: Date;

  @Column({ nullable: true })
  update_date?: Date;

  @Column({ nullable: true })
  categoryId?: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category

}
