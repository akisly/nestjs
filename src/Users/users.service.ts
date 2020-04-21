import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<IUser>,
  ) {}

  async findAll(): Promise<IUser[]> {
    return await this.usersModel.find({}).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    return await this.usersModel.create(createUserDto);
  }
}
