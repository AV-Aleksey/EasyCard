import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { Deck } from "../decks/decks.model";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    decks: Deck[];
}
export {};
