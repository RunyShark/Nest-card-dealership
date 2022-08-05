import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID('4')
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'Debe de tener un minimo de 3 letras' })
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}
