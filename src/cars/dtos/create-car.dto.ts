import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @MinLength(3, { message: 'Debe de tener un minimo de 3 letras' })
  readonly brand: string;
  @IsString()
  readonly model: string;
}
