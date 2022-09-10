import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Deck} from "./decks.model";
import {DeckCreateDto} from "./dto/deck-create.dto";

@Injectable()
export class DecksService {
    constructor(
        @InjectModel(Deck)
        private deckRepository: typeof Deck
    ) {
    }

    async getAllDecks(userId: number) {
        const allDecks = await this.deckRepository.findAll({ where: { userId }});
        return allDecks;
    }


    async createDeck(dto: DeckCreateDto, userId: number) {
        const deck = await this.deckRepository.create({
            userId,
            ...dto
        });

        return deck;
    }
}
