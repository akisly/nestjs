import { Controller, Get, Post, Body, Req, Res, Next } from '@nestjs/common';
import { BooksService } from './books.service';
import { Request, Response, NextFunction } from 'express';
import { IBook } from './interfaces/books.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('books')
  async getHello(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Promise<object> {
    try {
      const books = await this.booksService.findAll();

      return res.status(201).json({
        books,
      });
    } catch (error) {
      next(error);
    }
  }

  @Post('api/books')
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createBookDto: CreateBookDto,
    @Next() next: NextFunction,
  ): Promise<object> {
    try {
      const book: IBook = await this.booksService.create(createBookDto);

      return res.status(201).json({
        status: 'created',
        book,
      });
    } catch (error) {
      next(error);
    }
  }
}
