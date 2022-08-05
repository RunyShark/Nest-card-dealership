import { IsDate, IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsDate()
  createdAt: Date;
}
