import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  // eslint-disable-next-line class-methods-use-this
  @Get('check')
  public healthCheck(): string {
    return 'I am ok';
  }
}
