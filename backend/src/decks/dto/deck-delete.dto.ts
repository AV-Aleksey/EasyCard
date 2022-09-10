import { IsNumber } from "class-validator";

export class DeckDeleteDto {
    @IsNumber()
    id: number;
}
