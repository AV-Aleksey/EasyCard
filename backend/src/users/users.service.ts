import { Injectable } from '@nestjs/common';
import { User } from "./users.model";
import { Role } from '../roles/roles.model';
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";

/**
 * @description
 * Сервис хранит в себе логику получения и обработки данных
 * Сервис принимает в конструкторе секвалайз модель
 * */
@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userRepository: typeof User,
        /**Что бы использовать сторонние сервисы нужно:
         * - экспортировать сервис из файла модуля (roles.module)
         * - ипортировать сторонний модуль
         * - добавить в конструктор
         * */
        private roleService: RolesService

    ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("user");
        await user.$set('roles', [role.id])
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true }})
        return users;
    }
}
