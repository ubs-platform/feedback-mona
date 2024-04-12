import { Controller } from '@nestjs/common';
import { BaseCrudControllerGenerator } from './base/base-crud.controller';
import { UserMessageModel } from '../model/user-message.model';
import { IUserMessageDto } from 'libs/common/src/lib/dto';
import { ControllerConfiguration } from './base/controller-configuration';
import { UserMessageService } from '../service/user-message.service';
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
  constructor(userMsgService: UserMessageService) {
    super(userMsgService);
  }
}
