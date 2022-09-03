import {Column, DataType, Model, Table} from "sequelize-typescript";

/**
 * @description
 * type - Тип значения
 * unique - Поле должно быть уникальным
 * autoIncrement - С каждым записыванием будет инкриментироваться
 * primaryKey - Первичный ключ
 * allowNull - Может быть пустым
 * defaultValue - Значение поумолчанию
 *
 * */

/**Минимальный интерфейс необходимый для создания объекта*/
interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    password: string;

    /**@todo показатели бана нужно вынести в отдельную таблицу*/
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;
}
