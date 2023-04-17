import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity({name: 'dv_product'})
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  size: string;

  @Column()
  weight: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
