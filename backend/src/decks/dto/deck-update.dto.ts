import { IsNumber, IsString } from "class-validator";

export class DeckUpdateDto {
    @IsNumber()
    id: number;

    @IsString({ message: 'Должно быть строкой' })
    name: string;

    @IsString({ message: 'Должно быть строкой' })
    description?: string;
}
