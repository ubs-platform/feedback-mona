import { Body, Controller, Inject, Param, Post } from '@nestjs/common';
import { BaseCrudControllerGenerator } from './base/base-crud.controller';
import { UserMessageModel } from '../model/user-message.model';
import { IUserMessageDto, IUserMessageSearch } from 'libs/common/src/lib/dto';
import { ControllerConfiguration } from './base/controller-configuration';
import { UserMessageService } from '../service/user-message.service';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';
const config: ControllerConfiguration = {
  authorization: {
    ADD: { needsAuthenticated: false },
    ALL: { roles: ['ADMIN'] },
  },
};

@Controller('user-message')
export class UserMessageController extends BaseCrudControllerGenerator<
  UserMessageModel,
  IUserMessageDto,
  IUserMessageDto,
  IUserMessageSearch
>(config) {
  constructor(
    private userMsgService: UserMessageService,
    @Inject('KAFKA_CLIENT') private kafkaClient: ClientKafka
  ) {
    super(userMsgService);

    this.kafkaClient.emit('register-category', {
      category: 'USER_MESSAGE',
      serviceTcpHost: process.env['U_USERS_MONA_INTERNAL_COM_HOST'],
      serviceTcpPort: process.env['U_USERS_MONA_INTERNAL_COM_PORT'],
    });
  }

  @Post(':id/resolve')
  async resolve(
    @Param() { id }: { id: string },
    @Body() { reply }: { reply: string }
  ): Promise<IUserMessageDto> {
    return await this.userMsgService.resolve(id, reply);
  }

  @MessagePattern('file-upload-USER_MESSAGE')
  async insertQuestionMedia() {
    const name = new Date().toISOString(),
      category = 'USER_MESSAGE';
    return {
      category,
      name,
      volatile: true,
      durationMiliseconds: 15552000000,
      maxLimitBytes: 30000000,
    };
  }
}
