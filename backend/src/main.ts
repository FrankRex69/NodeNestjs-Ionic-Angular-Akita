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
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header'
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document, {
    swaggerOptions: {
      security: [{ 'JWT': [] }],
    },
  });

  //----------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------
    
  const port = 7000;
  app.listen(port, function () {    
    console.log(`http://localhost:${port}/api/swagger`);
  });

}
bootstrap();