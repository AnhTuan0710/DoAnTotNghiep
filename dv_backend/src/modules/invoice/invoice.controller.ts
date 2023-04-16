import { Invoice } from './../../models/invoice.entity';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { InvoiceService } from './invoice.service';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {

  }

  @Get()
  findAll(): Promise<Invoice[]> {
    return this.invoiceService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.invoiceService.findOne(params.id);
  }

  @Post()
  create(@Body() invoice: Invoice) {
    return this.invoiceService.create(invoice);
  }

  @Put()
  update(@Body() invoice: Invoice) {
    return this.invoiceService.update(invoice);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.invoiceService.delete(params.id);
  }

  @Get('product/:id')
  getAllInvoice(@Param() params) {
    return this.invoiceService.getAllInvoice(params.id)
  }
}
