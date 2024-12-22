import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './logger/winston.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception: ', err);
  });

  process.on('unhandledRejection', (err) => {
    logger.error('Unhandled Rejection: ', err);
  });

  // swagger configuration
  const config = new DocumentBuilder()
    .setTitle("Nest Passport Auth")
    .setDescription("The Nest Passport Auth documentation")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
