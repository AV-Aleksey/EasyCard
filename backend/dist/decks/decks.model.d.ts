import { Model } from "sequelize-typescript";
import { User } from "../users";
interface DeckCreationAttrs {
    name: string;
    userId: number;
}
export declare class Deck extends Model<Deck, DeckCreationAttrs> {
    id: number;
    name: string;
    description: string;
    userId: number;
    user: User;
}
export {};
