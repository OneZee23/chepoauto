import { ConfigFragment } from '@common/config/config-fragment';
import { Injectable } from '@nestjs/common';
import { IsString } from 'class-validator';
import { UseEnv } from '@common/config/use-env.decorator';

@Injectable()
export class TelegramConfig extends ConfigFragment {
  @IsString()
  @UseEnv('BOT_TOKEN')
  botToken: string;
}
