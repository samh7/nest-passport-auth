import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
    @ApiProperty({
        name: "email",
        description: "User's email address",
        example: "example@email.com"
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        name: "password",
        description: "User's password",
        example: "password"
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}
