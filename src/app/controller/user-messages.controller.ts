import { Body, Controller, Param, Post } from '@nestjs/common';
import { BaseCrudControllerGenerator } from './base/base-crud.controller';
import { UserMessageModel } from '../model/user-message.model';
import { IUserMessageDto } from 'libs/common/src/lib/dto';
import { ControllerConfiguration } from './base/controller-configuration';
import { UserMessageService } from '../service/user-message.service';
import { MessagePattern } from '@nestjs/microservices';
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
  IUserMessageDto
>(config) {
  constructor(private userMsgService: UserMessageService) {
    super(userMsgService);
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
    return { category, name };
  }
}
