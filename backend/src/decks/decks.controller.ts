import {Controller, Delete, Get, Post, Put, Req, UseGuards, Body, UsePipes} from '@nestjs/common';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import {DeckCreateDto} from "./dto/deck-create.dto";
import {DeckDeleteDto} from "./dto/deck-delete.dto";
import {DeckUpdateDto} from "./dto/deck-update.dto";
import {DecksService} from "./decks.service";
import {ValidatorPipe} from "../pipes/validator.pipe";

@UseGuards(JwtAuthGuard)
@UsePipes(ValidatorPipe)
@Controller('decks')
export class DecksController {
    constructor(
        private deckService: DecksService
    ) {
    }

    @Get()
    getAll(@Req() ctx) {
        return this.deckService.getAllDecks(ctx.user.id);
    }

    @Post()
    create(@Body() deckDto: DeckCreateDto, @Req() ctx) {
        return this.deckService.createDeck(deckDto, ctx.user.id)
    }

    @Delete()
    delete(@Body() deckDto: DeckDeleteDto) {

    }

    @Put()
    update(@Body() deckDto: DeckUpdateDto) {

    }

}
