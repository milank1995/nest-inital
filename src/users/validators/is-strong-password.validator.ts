import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
} from 'class-validator';

export function IsStrongPassword(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isStrongPassword',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, _args: ValidationArguments) {
                    if (typeof value !== 'string') return false;

                    // At least 8 chars, one number, one uppercase, one lowercase, one special char
                    const strongPasswordRegex =
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

                    return strongPasswordRegex.test(value);
                },
                defaultMessage(_args: ValidationArguments) {
                    return 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character';
                },
            },
        });
    };
}
