import { IsNotEmpty, IsNumber } from "class-validator";

export class CalorieDto {
    @IsNotEmpty()
    @IsNumber()
    calorie: number
}
