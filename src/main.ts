/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { getMicroserviceConnection } from '@ubs-platform/nest-microservice-setup-util';
import { Transport } from '@nestjs/microservices';
export const INTERNAL_COMMUNICATION = {
  port: parseInt(process.env['U_FEEDBACK_MONA_INTERNAL_COM_PORT'] || '0'),
  host: process.env['U_FEEDBACK_MONA_INTERNAL_COM_PORT'],
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.connectMicroservice(getMicroserviceConnection(''));
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: INTERNAL_COMMUNICATION.port,
      host: INTERNAL_COMMUNICATION.host,
    },
  });
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3169;
  await app.startAllMicroservices();
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
