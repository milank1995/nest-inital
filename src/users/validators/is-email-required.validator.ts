import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
} from 'class-validator';

export function IsEmailRequired(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isEmailRequired',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, _args: ValidationArguments) {
                    // Value must be a non-empty string
                    if (typeof value !== 'string' || value.trim() === '') return false;

                    // Basic email pattern check
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(value);
                },
                defaultMessage(_args: ValidationArguments) {
                    return 'Email is required and must be a valid email address';
                },
            },
        });
    };
}
