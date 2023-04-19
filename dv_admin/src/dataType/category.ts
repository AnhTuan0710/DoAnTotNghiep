import { ProductType } from "./product"

export interface CategoryType {
  category_cd: string
  category_name: string,
  list_product: ProductType[]
}