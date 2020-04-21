import { Injectable } from '@nestjs/common';
import UsersModel from './users.model';
import { IUser } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  findAll(): Promise<IUser[]> {
    return UsersModel.find({}).exec();
  }

  create(user: object): Promise<IUser> {
    return UsersModel.create(user);
  }
}
