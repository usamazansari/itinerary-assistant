import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { LoggerService } from '@itinerary-assistant/api/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.useLogger(new LoggerService());
  const logger = app.get(LoggerService);

  const port = config.get('PORT') || 3333;
  await app.listen(port);
  logger.log(`🚀 API Running!`, 'bootstrap');
}

bootstrap();
