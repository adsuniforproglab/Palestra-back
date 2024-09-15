import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WorkshopEntity } from '../workshop/workshop.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/modules/auth/constants/roles.enum';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column()
  @ApiProperty({ example: 'John Meireles' })
  userName: string;

  @Column({ unique: true })
  @ApiProperty({ example: '123456' })
  registerID: string;

  @Column()
  @ApiProperty({ example: 'john.doe@example.com' })
  email: string;

  @Column()
  @ApiProperty({ example: 'securepassword' })
  password: string;

  @Column({ default: Role.User })
  role: Role;

  @ManyToMany(() => WorkshopEntity, (workshop) => workshop.workShopUsers)
  @JoinTable({ name: 'workshop_user', joinColumn: { name: 'user_id' }, inverseJoinColumn: { name: 'workshop_id' } })
  @ApiProperty({ type: () => WorkshopEntity, isArray: true, nullable: true })
  workShops: WorkshopEntity[];

  @Column({ default: true })
  @ApiProperty({ example: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @ApiProperty({ example: '2023-01-01T00:00:00.000Z' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @ApiProperty({ example: '2023-01-01T00:00:00.000Z' })
  updatedAt: Date;
}
