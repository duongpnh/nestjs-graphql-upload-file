import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'body-parser';
import * as morgan from 'morgan';

// import { graphqlUploadExpress } from './modules/user/dto/GraphQLUploadExpress';
import { graphqlUploadExpress } from 'graphql-upload';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(morgan());
  app.use(json({ limit: '50mb' })); // Limit json
  app.use(urlencoded({ limit: '50mb', extended: true })); // Limit url
  app.use(graphqlUploadExpress({ maxFiles: 10, maxFileSize: 1000 }));

  await app.listen(3000);
}
bootstrap();
