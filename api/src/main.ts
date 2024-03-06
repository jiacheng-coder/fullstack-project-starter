import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const port = process.env.PORT || 8080;
  await app.listen(port, () => {
    console.log(`Running on port: ${port}, mode: ${process.env.NODE_ENV}`);
  });
}
bootstrap();
