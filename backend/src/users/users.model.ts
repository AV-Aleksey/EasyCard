import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import {Deck} from "../decks/decks.model";

/**
 * @description
 * type - Тип значения
 * unique - Поле должно быть уникальным
 * autoIncrement - С каждым записыванием будет инкриментироваться
 * primaryKey - Первичный ключ
 * allowNull - Может быть пустым
 * defaultValue - Значение поумолчанию
 *
 * @ApiProperty - описание для сваггера (не влиет на функционал)
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

    @ApiProperty({ example: '1234', description: 'Пароль' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    /**@todo показатели бана нужно вынести в отдельную таблицу*/
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Deck)
    decks: Deck[]
}
