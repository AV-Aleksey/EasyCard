import {Module} from '@nestjs/common';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users";
import {Deck} from "./decks.model";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [DecksController],
  providers: [DecksService],
  imports: [
      SequelizeModule.forFeature([User, Deck]),
      AuthModule
  ],
})
export class DecksModule {}
