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

  sendEmail(body: EmailDto) {
    this.eventClient.emit('email-reset', body);
  }

  sentUserMessage(um: IUserMessageDto) {
    // this.sendEmail({
    //   language: 'en-us',
    //   specialVariables: um,
    //   to: um.email,
    // });
  }
}
