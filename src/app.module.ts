import { Module } from '@nestjs/common';
import { WebserverModule } from '@infra/webserver/webserver.module';
import { TelegramModule } from '@modules/telegram/telegram.module';

@Module({
  imports: [
    // Infra modules
    WebserverModule,

    // Business modules
    TelegramModule,
  ],
})
export class AppModule {}
