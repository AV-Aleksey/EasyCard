import { IsString, IsOptional } from "class-validator";

export class DeckCreateDto {
    @IsString({ message: 'Должно быть строкой' })
    name: string;

    @IsOptional()
    @IsString({ message: 'Должно быть строкой' })
    description?: string;
}
