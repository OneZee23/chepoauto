import { Injectable } from '@nestjs/common';
import { ConfigFragment } from '@common/config/config-fragment';
import { UseEnv } from '@common/config/use-env.decorator';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@Injectable()
export class WebserverConfig extends ConfigFragment {
  @IsInt()
  @UseEnv('PORT', parseInt)
  port: number;

  @IsString()
  @IsNotEmpty()
  @UseEnv(
    'PUBLIC_URL',
    (url?: string) => url ?? `http://127.0.0.1:${process.env.PORT}`,
  )
  publicUrl: string;
}
