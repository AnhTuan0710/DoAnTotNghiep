import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Invoice } from '../../models/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepo: Repository<Invoice>,
  ) { }

  async findAll(): Promise<Invoice[]> {
    return await this.invoiceRepo.find();
  }

  async findOne(id: number): Promise<Invoice> {
    return await this.invoiceRepo.findOne({ where: { id: id } })
  }

  async create(invoice: Invoice): Promise<Invoice> {
    return await this.invoiceRepo.save(invoice)
  }

  async update(invoice: Invoice): Promise<UpdateResult> {
    return await this.invoiceRepo.update(invoice.id, invoice);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.invoiceRepo.delete(id);
  }

  async getAllInvoice(invoiceId: number): Promise<Invoice> {
    return await this.invoiceRepo.findOne({ where: { id: invoiceId }, relations: ['products'] })
  }
}

