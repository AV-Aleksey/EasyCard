import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../exceptions/validation.exception";

/**@description pipe - используют для валидации или преобразований (например строки в число)*/

@Injectable()
export class ValidatorPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        console.log(value, metadata)

        const obj = plainToClass(metadata.metatype, value);
        const err = await validate(obj) ;

        if (err.length) {
            let messages = err.map(err => {
                return `${err.property} - ${Object.values(err.constraints).join(',')}`
            })

            throw new ValidationException(messages)
        }

        return value
    }
}
