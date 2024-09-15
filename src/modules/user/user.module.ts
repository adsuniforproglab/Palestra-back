import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import UserService from './user.service';
import { UserController } from './user.controller';
import { WorkshopEntity } from '../workshop/workshop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, WorkshopEntity]),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule { }
