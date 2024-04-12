import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendJwtUtilsModule } from '@ubs-platform/users-mona-microservice-helper';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

import {
  UserMessageModel,
  UserMessageSchema,
} from './model/user-message.model';
import { UserMessageService } from './service/user-message.service';
import { UserMessageController } from './controller/user-messages.controller';

@Module({
  imports: [
    BackendJwtUtilsModule,
    MongooseModule.forRoot(
      `mongodb://${process.env.NX_MONGO_USERNAME}:${
        process.env.NX_MONGO_PASSWORD
      }@${process.env.NX_MONGO_URL || 'localhost'}/?authMechanism=DEFAULT`,
      {
        dbName: process.env.NX_MONGO_DBNAME || 'ubs_users',
      }
    ),
    MongooseModule.forFeature([
      { name: UserMessageModel.name, schema: UserMessageSchema },
    ]),
  ],
  controllers: [AppController, UserMessageController],
  providers: [AppService, UserMessageService],
})
export class AppModule {}
