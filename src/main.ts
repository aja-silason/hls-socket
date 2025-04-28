import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  
  const logger = new Logger('main');
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({transform: true}));

  const port: any = 3000;

  await app.listen(port, () => {
    logger.log(`Server is running in port: ${port}`);
  });
}

bootstrap();
