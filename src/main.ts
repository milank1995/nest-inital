import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createGlobalValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(createGlobalValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
