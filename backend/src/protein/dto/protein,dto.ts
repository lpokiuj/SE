import { IsNotEmpty, IsNumber } from "class-validator";

export class ProteinDto {
    @IsNotEmpty()
    @IsNumber()
    protein: number
}
