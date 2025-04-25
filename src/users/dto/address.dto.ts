import {
    IsString,
    IsNotEmpty,
    IsOptional,
    Matches
} from 'class-validator';

export class AddressDto {
    @IsNotEmpty({ message: 'Address line 1 is required' })
    addressLine1: string;

    @IsOptional()
    addressLine2?: string;

    @IsNotEmpty({ message: 'City is required' })
    city: string;

    @IsNotEmpty({ message: 'State is required' })
    state: string;

    @IsNotEmpty({ message: 'Country is required' })
    country: string;

    @IsString()
    @Matches(/^\d{6}$/, { message: 'Pin code must be exactly 6 digits' })
    pinCode: string;
}
