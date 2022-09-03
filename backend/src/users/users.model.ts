import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

/**
 * @description
 * type - Тип значения
 * unique - Поле должно быть уникальным
 * autoIncrement - С каждым записыванием будет инкриментироваться
 * primaryKey - Первичный ключ
 * allowNull - Может быть пустым
 * defaultValue - Значение поумолчанию
 *
<<<<<<< HEAD
 *
 * @ApiProperty - описание для сваггера (не влиет на функционал)
=======
>>>>>>> 6448d5feed90c9c9f7c44f61b4b0beb072b763cf
 * */

/**Минимальный интерфейс необходимый для создания объекта*/
interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'email@gmail.com', description: 'Почтовый адрес' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    password: string;

    /**@todo показатели бана нужно вынести в отдельную таблицу*/
    @ApiProperty({ example: 'true', description: 'Забанент или нет' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;
}
