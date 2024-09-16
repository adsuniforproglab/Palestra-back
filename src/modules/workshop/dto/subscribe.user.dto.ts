import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../../user/dto/create.user.dto';
import { ArrayNotEmpty, IsEmail, isEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { WorkshopEntity } from 'src/modules/workshop/workshop.entity';

export class SubscribeUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ type: WorkshopEntity, isArray: true, required: true })
  @ArrayNotEmpty()
  workShops: WorkshopEntity[];
}
