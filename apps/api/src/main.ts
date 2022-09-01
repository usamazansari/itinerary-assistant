import { LoggerService } from '@itinerary-assistant/api/core';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.useLogger(new LoggerService());

  const port = config.get('PORT') || 3333;
  await app.listen(port);
  Logger.log(`🚀 API Running!`, 'bootstrap');
}

bootstrap();
