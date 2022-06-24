import { IsNotEmpty, IsNumber } from "class-validator";

export class FatDto {
    @IsNotEmpty()
    @IsNumber()
    fat: number
}
