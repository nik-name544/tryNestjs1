import { ApiProperty } from '@nestjs/swagger'
import { IsString, Length, IsEmail } from 'class-validator'

export class CreateUserDto {

    @ApiProperty({ example: 'email@gmail.com', description: "unique user email" })
    @IsString({ message: "email should be a string" })
    @IsEmail({}, { message: "bad email" })
    readonly email: string


    @ApiProperty({ example: 'password', description: "user password" })
    @IsString({ message: "password should be a string" })
    @Length(8, 34, { message: "password too weak" })
    readonly password: string

}