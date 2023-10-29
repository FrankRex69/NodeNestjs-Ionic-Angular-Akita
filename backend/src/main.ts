import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { urlencoded } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.use(urlencoded({ extended: true, limit: '50mb' }));

  // --- Swagger
  const config = new DocumentBuilder()
    .setTitle('BASE API')
    .setDescription('Chat Operativa API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);

  //----------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------
    
  const port = 7000;
  app.listen(port, function () {
    console.log(`http://localhost:${port}/auth`);
    console.log(`http://localhost:${port}/api/swagger`);
  });

}
bootstrap();