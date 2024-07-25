import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';
import { TelegramConfig } from '@modules/telegram/telegram.config';

@Injectable()
export class TelegramService implements OnApplicationBootstrap {
  private readonly logger = new Logger(this.constructor.name);

  private readonly bot: TelegramBot;

  constructor(private readonly config: TelegramConfig) {
    this.bot = new TelegramBot(this.config.botToken, { polling: true });
  }

  public async onApplicationBootstrap(): Promise<void> {
    this.initializeBot();
  }

  private initializeBot(): void {
    this.bot.onText(/\/start/, (msg) => {
      if (msg.chat.type !== 'private') return;

      const fromId = msg.from.id;
      this.bot.sendMessage(
        fromId,
        'Привет! Пришлите мне фото, чтобы я мог оценить его. Используйте команды /help для получения инструкции.',
      );
    });

    this.bot.onText(/\/help/, (msg) => {
      if (msg.chat.type !== 'private') return;

      const fromId = msg.from.id;
      this.bot.sendMessage(
        fromId,
        'Инструкция: пришлите фото, и я отвечу нужна ли тебе такая машина брат.',
      );
    });

    this.bot.on('photo', (msg) => {
      if (msg.chat.type !== 'private') return;

      const fromId = msg.from.id;
      this.logger.log(
        `User id ${fromId} sent photo. #User: ${JSON.stringify(msg.from)}`,
      );
      const responses = ['Надо брать', 'Это корыто, брат...'];
      const response = responses[Math.floor(Math.random() * responses.length)];
      this.bot.sendMessage(fromId, response);
    });

    this.bot.on('message', (msg) => {
      if (msg.chat.type !== 'private') return;

      const fromId = msg.from.id;
      if (!msg.photo && msg.text !== '/start' && msg.text !== '/help') {
        this.bot.sendMessage(fromId, 'Пожалуйста, пришлите только фото.');
      }
    });
  }
}
