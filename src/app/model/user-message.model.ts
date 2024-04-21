import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FileMeta } from './filemeta';

@Schema()
export class UserMessageModel {
  _id: String;

  @Prop()
  firstName?: String;
  @Prop()
  lastName?: String;
  @Prop()
  email?: String;
  @Prop()
  phoneNumber?: String;
  @Prop()
  summary?: String;
  @Prop()
  message?: String;
  @Prop({ type: [String] })
  fileUrls?: FileMeta[];
  @Prop()
  type?: String;
  @Prop()
  creationDate?: Date;
  @Prop()
  status?: 'WAITING' | 'RESOLVED';
  @Prop()
  reply?: String;
  @Prop()
  relatedUrl?: String;
}
export const UserMessageSchema = SchemaFactory.createForClass(UserMessageModel);
