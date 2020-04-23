import { Controller, Get, Post, Body, Req, Res, Next } from '@nestjs/common';
import { BooksService } from './books.service';
import { Request, Response, NextFunction } from 'express';
import { Book } from './books.entity';

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
      const books: Book[] = await this.booksService.findAll();

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
    @Body() body: Book,
    @Next() next: NextFunction,
  ): Promise<object> {
    try {
      const book: Book = await this.booksService.create(body);

      return res.status(201).json({
        statusCode: 201,
        book,
      });
    } catch (error) {
      next(error);
    }
  }
}
