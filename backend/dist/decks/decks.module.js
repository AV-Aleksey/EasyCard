"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecksModule = void 0;
const common_1 = require("@nestjs/common");
const decks_controller_1 = require("./decks.controller");
const decks_service_1 = require("./decks.service");
const sequelize_1 = require("@nestjs/sequelize");
const users_1 = require("../users");
const decks_model_1 = require("./decks.model");
const auth_module_1 = require("../auth/auth.module");
let DecksModule = class DecksModule {
};
DecksModule = __decorate([
    (0, common_1.Module)({
        controllers: [decks_controller_1.DecksController],
        providers: [decks_service_1.DecksService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_1.User, decks_model_1.Deck]),
            auth_module_1.AuthModule
        ],
    })
], DecksModule);
exports.DecksModule = DecksModule;
//# sourceMappingURL=decks.module.js.map