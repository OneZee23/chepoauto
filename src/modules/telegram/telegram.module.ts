import { Module } from '@nestjs/common';
import { TelegramConfig } from '@modules/telegram/telegram.config';
import { TelegramService } from './telegram.service';

@Module({
  providers: [TelegramConfig, TelegramService],
})
export class TelegramModule {}
