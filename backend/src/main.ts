import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { urlencoded } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // const app = await NestFactory.create(AppModule);  
  // app.enableCors({
  //   origin: [
  //     'http://localhost:7000/test1',
  //     'http://localhost:8100',
  //   ],
  //   methods: ["GET", "POST"],
  //   credentials: true,
  // });

  app.use(urlencoded({ extended: true, limit: '50mb' }));

  // --- Swagger
  const config = new DocumentBuilder()
    .setTitle('BASE API')
    .setDescription('Chat Operativa API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        // type: 'http',
        // scheme: 'bearer',
        // bearerFormat: 'JWT',
        // name: 'JWT',
        // description: 'Enter JWT token',
        // in: 'header',

        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header'
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api/swagger', app, document);

  // SwaggerModule.setup('api/swagger', app, document, {
  //   swaggerOptions: {
  //     persistAuthorization: true,
  //   },
  // });


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
    console.log(`http://localhost:${port}/auth`);
    console.log(`http://localhost:${port}/api/swagger`);
  });

}
bootstrap();