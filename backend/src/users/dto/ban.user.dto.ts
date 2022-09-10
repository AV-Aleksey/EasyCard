import {ApiProperty} from "@nestjs/swagger";

/**
 *  @description
 * Dto - описание объекта пейлода
 * */

export class BanUserDto {
    @ApiProperty({ example: '20', description: 'id пользователя' })
    readonly userId: number;
    readonly status: boolean;
}
