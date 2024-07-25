import { INestApplication, Injectable, Logger } from '@nestjs/common';
import { WebserverConfig } from '@infra/webserver/webserver.config';

@Injectable()
export class WebserverSetupService {
  constructor(
    private readonly config: WebserverConfig,
  ) {
  }

  public async setup(app: INestApplication): Promise<void> {
    await app.listen(this.config.port);

    const msg = `Serving service on ${this.config.publicUrl}`;
    new Logger('Webserver').log(msg);
  }
}
