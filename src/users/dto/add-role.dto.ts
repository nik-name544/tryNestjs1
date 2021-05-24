import { IsString, IsNumber } from "class-validator"

export class AddroleDto {
    @IsString({ message: "value should be a string" })
    readonly value: string

    @IsNumber({}, { message: "userId should be a number" })
    readonly userId: number
}