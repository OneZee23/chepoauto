import { Global, Module } from '@nestjs/common';
import { WebserverSetupService } from '@infra/webserver/webserver-setup.service';
import { WebserverConfig } from '@infra/webserver/webserver.config';
import { HealthController } from './health.controller';

@Global()
@Module({
  providers: [WebserverConfig, WebserverSetupService],
  exports: [WebserverSetupService],
  controllers: [HealthController],
})
export class WebserverModule {}
