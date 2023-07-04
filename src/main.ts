import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(json({ limit: '50mb' })); // Limit json
  app.use(urlencoded({ limit: '50mb', extended: true })); // Limit url

  await app.listen(3000);
}
bootstrap();
