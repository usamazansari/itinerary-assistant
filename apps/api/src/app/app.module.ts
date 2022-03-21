import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { express as Voyager } from 'graphql-voyager/middleware';

import { CoreModule, TripModule, UserModule } from './imports/modules';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoreModule, TripModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Voyager({ endpointUrl: '/voyager' })).forRoutes('*');
  }
}
