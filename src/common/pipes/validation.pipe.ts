import {
    BadRequestException,
    ValidationPipe,
    ValidationError,
} from '@nestjs/common';

export function createGlobalValidationPipe(): ValidationPipe {
    return new ValidationPipe({
        whitelist: true, // Removes unknown properties
        forbidNonWhitelisted: true, // Throws if extra props are passed
        transform: true, // Transforms plain JSON to DTO class instances
        exceptionFactory: (errors: ValidationError[]) => {
            const formattedErrors = {};

            for (const error of errors) {
                const field = error.property;
                if (error.constraints) {
                    formattedErrors[field] = Object.values(error.constraints);
                }

                // Handle nested validation (e.g. address.city)
                if (error.children && error.children.length > 0) {
                    formattedErrors[field] = {};
                    for (const child of error.children) {
                        if (child.constraints) {
                            formattedErrors[field][child.property] = Object.values(child.constraints);
                        }
                    }
                }
            }

            return new BadRequestException({
                statusCode: 400,
                message: 'Validation failed',
                errors: formattedErrors,
            });
        },
    });
}