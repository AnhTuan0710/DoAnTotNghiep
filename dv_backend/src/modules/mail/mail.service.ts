import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailCreateUserTemplate } from './templates/create-user';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) { }

  async sendCreateUserEmail(name: string, email: string, password: string) {
    const template = MailCreateUserTemplate(name, email, password);
    await this.mailerService.sendMail(template);
  }
}