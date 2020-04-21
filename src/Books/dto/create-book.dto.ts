import { IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Published {
  @IsString()
  publisher: string;

  @IsNumber()
  year: number;
}

export class CreateBookDto {
  @IsNumber()
  readonly blogpost: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly author: string;

  @ValidateNested({ each: true })
  @Type(() => Published)
  readonly published: Published;
}
