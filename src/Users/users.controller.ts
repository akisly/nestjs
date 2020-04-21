import { Controller, Get, Post, Body, Req, Res, Next } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response, NextFunction } from 'express';
import { IUser } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  async getHello(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Promise<object> {
    try {
      const users = await this.usersService.findAll();

      return res.status(201).json({
        users,
      });
    } catch (error) {
      next(error);
    }
  }

  @Post('api/users')
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createUserDto: CreateUserDto,
    @Next() next: NextFunction,
  ): Promise<object> {
    try {
      const user: IUser = await this.usersService.create(createUserDto);

      return res.status(201).json({
        status: 'created',
        user,
      });
    } catch (error) {
      next(error);
    }
  }
}
