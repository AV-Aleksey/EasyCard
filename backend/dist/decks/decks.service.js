"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecksService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const decks_model_1 = require("./decks.model");
let DecksService = class DecksService {
    constructor(deckRepository) {
        this.deckRepository = deckRepository;
    }
    async getAllDecks(userId) {
        const allDecks = await this.deckRepository.findAll({ where: { userId } });
        return allDecks;
    }
    async createDeck(dto, userId) {
        const deck = await this.deckRepository.create(Object.assign({ userId }, dto));
        return deck;
    }
};
DecksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(decks_model_1.Deck)),
    __metadata("design:paramtypes", [Object])
], DecksService);
exports.DecksService = DecksService;
//# sourceMappingURL=decks.service.js.map