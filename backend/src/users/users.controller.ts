import { Controller, Post, Get, Body } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";

/**
 * @description
 * Вызываем декаратор контроллера и создаем имя
 * Контроллер принимает в конструкторе сервис (файл .service.ts)
 * Котроллер не должен хранить логику с обработкой данных
 * */
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService ) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }
}
