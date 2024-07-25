import { INestApplication, Injectable, Logger } from '@nestjs/common';
import { WebserverConfig } from '@infra/webserver/webserver.config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Injectable()
export class WebserverSetupService {
  private readonly appName = 'chepoauto-bot';

  constructor(private readonly config: WebserverConfig) {}

  public async setup(app: INestApplication): Promise<void> {
    await app.listen(this.config.port);

    const msg = `Serving ${this.appName} on ${this.config.port} port`;
    new Logger('Webserver').log(msg);
  }
}
