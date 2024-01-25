import {
  IsEnum,
  IsDate,
  IsBoolean,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
export class UpdateNoteDto {
  @IsString()
  @MinLength(1, { message: 'Text must have atleast 1 characters.' })
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsEnum(['h', 's', 'a'])
  category: string;

  @IsBoolean()
  archived: boolean;

  @IsDate()
  date: Date;
}
