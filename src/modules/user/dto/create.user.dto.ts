import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';
import { WorkshopEntity } from 'src/modules/workshop/workshop.entity';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  userName: string;

  @ApiProperty()
  @IsString()
  registerID: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty({ type: Number, isArray: true })
  @IsOptional()
  @IsArray()
  workShops?: WorkshopEntity[];
}
