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
export interface InvoiceRespose {
  active_flg: number,
  create_date: string,
  id: number,
  orderNumber: string,
  products: any[]
  status: number,
  totalAmount: number,
  update_date: string,
  user: any,
  orderDetails: any[],
}