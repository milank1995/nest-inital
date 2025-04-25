import { IsNotEmpty, IsString, IsOptional, IsEnum, ValidateNested } from "class-validator"
import { Type } from "class-transformer"
import { IsEmailRequired } from "../validators/is-email-required.validator"
import { IsStrongPassword } from "../validators/is-strong-password.validator"
import { AddressDto } from "./address.dto"

enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  BLOCKED = 'BLOCKED',
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'First name is required' })
    firstName: string

    @IsString()
    @IsOptional()
    middleName: string

    @IsString()
    @IsNotEmpty({ message: 'Last name is required' })
    lastName: string

    @IsString()
    @IsNotEmpty({ message: 'Username is required' })
    userName: string

    @IsEmailRequired()
    email: string;

    @IsStrongPassword()
    password: string

    @IsOptional()
    @IsEnum(UserStatus, { message: 'Status must be either ACTIVE, INACTIVE, or BLOCKED' })
    status: UserStatus

    @ValidateNested()
    @Type(() => AddressDto)
    @IsNotEmpty({ message: 'Address is required' })
    address: AddressDto
}