import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const logger = new Logger('start')
  const PORT = process.env.PORT || 5000

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('first steps in backend')
    .setDescription('docs of rest api')
    .setVersion('1.0.0')
    .addTag('nikName544')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => logger.log(`app listening on port ${PORT}`));
}
start();
