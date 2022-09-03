import {ApiProperty} from "@nestjs/swagger";

/**
 *  @description
 * Dto - описание объекта пейлода
 * */

export class CreateUserDto {
    @ApiProperty({ example: 'email@mail.com', description: 'Почта' })
    readonly email: string;
    @ApiProperty({ example: '123', description: 'Пароль' })
    readonly password: string;
}
