import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";

/**
 * @description
 * type - Тип значения
 * unique - Поле должно быть уникальным
 * autoIncrement - С каждым записыванием будет инкриментироваться
 * primaryKey - Первичный ключ
 * allowNull - Может быть пустым
 * defaultValue - Значение поумолчанию
 *

/**Минимальный интерфейс необходимый для создания объекта*/
interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: 'roles', updatedAt: false, createdAt: false })
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'ADMIN/USER', description: 'Значение роли пользователя' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({ example: 'Права: CRUD', description: 'Описание роли' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    user: User[]
}
