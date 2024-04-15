import { Injectable } from '@nestjs/common';
import { BaseCrudServiceGenerate } from './base/base-crud.service';
import { UserMessageModel } from '../model/user-message.model';
import { IUserMessageDto } from '../../../libs/common/src/lib/dto';
import { FilterQuery } from 'mongoose';

@Injectable()
export class UserMessageService extends BaseCrudServiceGenerate<
  UserMessageModel,
  IUserMessageDto,
  IUserMessageDto,
  IUserMessageDto
>(UserMessageModel.name) {
  toOutput(m: UserMessageModel): IUserMessageDto | Promise<IUserMessageDto> {
    return {
      message: m.message,
      email: m.email,
      firstName: m.firstName,
      lastName: m.lastName,
      type: m.type,
      fileUrls: m.fileUrls,
      creationDate: m.creationDate,
      relatedUrl: m.relatedUrl,
      status: m.status,
      phoneNumber: m.phoneNumber,
      summary: m.summary,
      reply: m.reply,
      _id: m._id,
    } as IUserMessageDto;
  }
  moveIntoModel(
    model: UserMessageModel,
    i: IUserMessageDto
  ): UserMessageModel | Promise<UserMessageModel> {
    model.email = i.email;
    model.firstName = i.firstName;
    model.lastName = i.lastName;
    model.type = i.type;
    model.fileUrls = i.fileUrls;
    model._id = i._id;
    model.message = i.message;
    model.phoneNumber = i.phoneNumber;
    model.summary = i.summary;
    model.relatedUrl = i.relatedUrl;
    if (model.creationDate == null) {
      model.creationDate = new Date();
    }
    if (model.status == null) {
      model.status = 'WAITING';
    }
    return model;
  }
  searchParams(s?: IUserMessageDto): FilterQuery<UserMessageModel> {
    const c = {} as FilterQuery<UserMessageModel>;
    if (s._id) {
      c._id = s._id;
    }
    if (s.firstName) {
      c.firstName = this.regexSearch(s.firstName);
    }
    if (s.lastName) {
      c.lastName = this.regexSearch(s.lastName);
    }
    if (s.message) {
      c.message = this.regexSearch(s.message);
    }
    if (s.phoneNumber) {
      c.phoneNumber = this.regexSearch(s.phoneNumber);
    }
    if (s.summary) {
      c.summary = this.regexSearch(s.summary);
    }
    if (s.type) {
      c.type = s.type;
    }
    return c;
  }

  private regexSearch(str: String): any {
    return { $regex: '.*' + str + '.*' };
  }
}
