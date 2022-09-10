import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users";

interface DeckCreationAttrs {
    name: string;
    userId: number;
}

@Table({ tableName: 'decks' })
export class Deck extends Model<Deck, DeckCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: true, defaultValue: null })
    description: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => User)
    user: User
}
