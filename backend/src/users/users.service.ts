import { Injectable } from '@nestjs/common';
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import {BanUserDto} from "./dto/ban.user.dto";

import * as bcrypt from 'bcryptjs';

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
        const hashPass = await bcrypt.hash(dto.password, 5);

        const user = await this.userRepository.create({
            ...dto,
            password: hashPass,
        });
        const role = await this.roleService.getRoleByValue("user");
        await user.$set('roles', [role.id])

        user.roles = [role];
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({
            include: {
                all: true
            }
        });
        return users;
    }

    async getUsersByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: {
                email
            },
            include: {
                all: true
            }
        });
        return user;
    }

    async setBanStatus(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        user.banned = dto.status;

        await user.save();

        return user;
    }
}
