import { Deck } from "./decks.model";
import { DeckCreateDto } from "./dto/deck-create.dto";
export declare class DecksService {
    private deckRepository;
    constructor(deckRepository: typeof Deck);
    getAllDecks(userId: number): Promise<Deck[]>;
    createDeck(dto: DeckCreateDto, userId: number): Promise<Deck>;
}
