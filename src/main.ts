import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  getSwaggerDocumentConfig,
  getSwaggerSetupConfig,
} from './config/swagger.configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJs API Default (Prisma) - Documentation')
    .setDescription('By Wellington Alves and Leonardo Vieira')
    .setVersion('v1')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerConfig,
    getSwaggerDocumentConfig(),
  );

  SwaggerModule.setup('docs', app, swaggerDocument, getSwaggerSetupConfig());

  await app.listen(3000);
}
bootstrap();
