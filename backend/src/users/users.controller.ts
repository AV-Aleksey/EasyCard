import {Controller, Post, Get, Body, UseGuards, Req, Put, UsePipes} from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { User } from "./users.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "../auth/roles.guard";
import { BanUserDto } from "./dto/ban.user.dto";
import { ValidatorPipe } from "../pipes/validator.pipe";


/**
 * @description
 * Вызываем декаратор контроллера и создаем имя
 * Контроллер принимает в конструкторе сервис (файл .service.ts)
 * Котроллер не должен хранить логику с обработкой данных
 * */

@ApiTags('Пользователи')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService ) {}


    @ApiOperation({ summary: 'Создание пользователя' })
    @ApiResponse({ status: 200, type: User })
    @UsePipes(ValidatorPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }


    // @UseGuards(RolesGuard)
    @ApiOperation({ summary: 'Получение пользователей' })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @ApiOperation({ summary: 'Бан пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Put('/ban')
    async banUser(@Body() dto: BanUserDto) {
        return this.usersService.setBanStatus(dto)
    }




}
