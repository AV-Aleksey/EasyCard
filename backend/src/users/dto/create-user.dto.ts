import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

/**
 *  @description
 * Dto - описание объекта пейлода
 * */

export class CreateUserDto {
    @ApiProperty({example: 'email@mail.com', description: 'Почта'})
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Невалидный email' })
    readonly email: string;

    @ApiProperty({example: '1234555', description: 'Пароль'})
    @IsString({ message: 'Должно быть строкой' })
    @Length(4, 16, { message: 'Невалидный пароль' })
    readonly password: string;
}
