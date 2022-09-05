import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { UserRoles } from "../roles/user-roles.model";
import { Role } from '../roles/roles.model';
import { RolesModule } from "../roles/roles.module";

/**
 * @description
 * Модуль определяет конфиграцию на уровне модуля
 * controllers - подключаем контроллеры (файлы .controller.ts)
 * providers - подключаем сервисы (файлы .service.ts)
 * imports:
 *  - SequelizeModule.forFeature - определяем какие модели будет использовать модуль
 * */
@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles]),
        /**Модуль можно импортировать в другой модуль но что бы воспользоваться сервисом нужно указать в imports: [] экспортируемый сервис*/
        RolesModule
    ],
    exports: [UsersService]
})
export class UsersModule {}
