import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { EmailDto } from '@ubs-platform/notify-common';
import { UserMessageModel } from '../model/user-message.model';
import { IUserMessageDto } from 'libs/common/src/lib/dto';

@Injectable()
export class EmailService {
  constructor(
    @Inject('KAFKA_CLIENT')
    private eventClient: ClientKafka
  ) {}

  private async sendEmail(body: EmailDto) {
    await this.eventClient.emit('email-reset', body);
  }

  async sentUserMessageResolvedMail(um: IUserMessageDto) {
    await this.sendEmail({
      language: 'en-us',
      specialVariables: {
        userfirstname: um.firstName,
        userlastname: um.lastName,
        summary: um.summary,
        message: um.message,
        reply: um.reply,
        status: um.status,
      },
      subject: '{{global:ubs-user-message-resolved-short}}',
      to: um.email,
      templateName: 'ubs-user-message-resolved',
    });
  }

  async sentUserMessage(um: IUserMessageDto) {
    await this.sendEmail({
      language: 'en-us',
      specialVariables: {
        userfirstname: um.firstName,
        userlastname: um.lastName,
        summary: um.summary,
        message: um.message,
      },
      subject: '{{global:ubs-user-message-sent-short}}',
      to: um.email,
      templateName: 'ubs-user-message-sent',
    });
  }
}
