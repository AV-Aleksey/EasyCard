import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import {CanActivate} from "@nestjs/common";
import {ValidatorPipe} from "./pipes/validator.pipe";

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

  /**@description глобальные гварды*/
  // app.useGlobalGuards([new JwtAuthGuard()]);
  /**@description глобальные гварды*/
  // app.useGlobalPipes(new ValidatorPipe())


  await app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
}

start();
