import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

/**
 * @description
 * start - функция точка старта приложения
 *
 * */

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('EasyCard - Помошник для запоминания слов')
      .setDescription('Документация REST')
      .setVersion('0.0.1')
      .addTag('Aleksey')
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
}

start();
