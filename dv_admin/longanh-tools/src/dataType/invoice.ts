export interface InvoiceType {
  invoice_cd: string,
  customer_cd: string,
  total_amount: number,
  total_paid: number,
  total_debt: number,
  status: number, 
  product: ProductInvoice[]
}
export interface ProductInvoice {
  product_cd: string,
  product_name: string, 
  price: number, 
  quanlity: number
}