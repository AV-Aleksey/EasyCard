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
exports.DecksController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const deck_create_dto_1 = require("./dto/deck-create.dto");
const deck_delete_dto_1 = require("./dto/deck-delete.dto");
const deck_update_dto_1 = require("./dto/deck-update.dto");
const decks_service_1 = require("./decks.service");
const validator_pipe_1 = require("../pipes/validator.pipe");
let DecksController = class DecksController {
    constructor(deckService) {
        this.deckService = deckService;
    }
    getAll(ctx) {
        return this.deckService.getAllDecks(ctx.user.id);
    }
    create(deckDto, ctx) {
        return this.deckService.createDeck(deckDto, ctx.user.id);
    }
    delete(deckDto) {
    }
    update(deckDto) {
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DecksController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deck_create_dto_1.DeckCreateDto, Object]),
    __metadata("design:returntype", void 0)
], DecksController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deck_delete_dto_1.DeckDeleteDto]),
    __metadata("design:returntype", void 0)
], DecksController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deck_update_dto_1.DeckUpdateDto]),
    __metadata("design:returntype", void 0)
], DecksController.prototype, "update", null);
DecksController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(validator_pipe_1.ValidatorPipe),
    (0, common_1.Controller)('decks'),
    __metadata("design:paramtypes", [decks_service_1.DecksService])
], DecksController);
exports.DecksController = DecksController;
//# sourceMappingURL=decks.controller.js.map