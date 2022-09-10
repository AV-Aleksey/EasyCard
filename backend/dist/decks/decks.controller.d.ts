import { CreateDeckDto } from "./dto/create-deck.dto";
import { User } from "../users";
export declare class DecksController {
    create(deckDto: CreateDeckDto, ctx: User): void;
}
