"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const validator_pipe_1 = require("./pipes/validator.pipe");
async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('EasyCard - Помошник для запоминания слов')
        .setDescription('Документация REST')
        .setVersion('0.0.1')
        .addTag('Aleksey')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    app.useGlobalPipes(new validator_pipe_1.ValidatorPipe());
    await app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map