import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
  images?: String[];
  @Prop()
  type?: String;
}
export const UserMessageSchema = SchemaFactory.createForClass(UserMessageModel);
