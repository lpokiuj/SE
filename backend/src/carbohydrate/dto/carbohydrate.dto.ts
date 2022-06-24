import { IsNotEmpty, IsNumber } from "class-validator";

export class CarbohydrateDto {
    @IsNotEmpty()
    @IsNumber()
    carbohydrate: number
}
