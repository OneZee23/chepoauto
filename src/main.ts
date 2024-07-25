import 'source-map-support/register';
import { WebserverSetupService } from '@infra/webserver/webserver-setup.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.get(WebserverSetupService).setup(app);
})();
