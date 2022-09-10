import { DeckCreateDto } from "./dto/deck-create.dto";
import { DeckDeleteDto } from "./dto/deck-delete.dto";
import { DeckUpdateDto } from "./dto/deck-update.dto";
import { DecksService } from "./decks.service";
export declare class DecksController {
    private deckService;
    constructor(deckService: DecksService);
    getAll(ctx: any): Promise<import("./decks.model").Deck[]>;
    create(deckDto: DeckCreateDto, ctx: any): Promise<import("./decks.model").Deck>;
    delete(deckDto: DeckDeleteDto): void;
    update(deckDto: DeckUpdateDto): void;
}
