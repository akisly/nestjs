import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { IsString, IsEmail, IsBoolean, IsPhoneNumber } from 'class-validator';

@Entity('usersmodel')
export class User {
  @ObjectIdColumn()
  id?: ObjectID;

  @IsString()
  @Column()
  firstName: string;

  @IsString()
  @Column()
  lastName: string;

  @IsEmail()
  @Column()
  email: string;

  @IsPhoneNumber('ZZ')
  @Column()
  phone: string;

  @IsBoolean()
  @Column()
  isAdmin: boolean;

  @IsBoolean()
  @Column()
  verified: boolean;
}
