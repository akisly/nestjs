import { Injectable } from '@nestjs/common';
import BooksModel from './books.model';
import { IBook } from './interfaces/books.interface';

@Injectable()
export class BooksService {
  findAll(): Promise<IBook[]> {
    return BooksModel.find({}).exec();
  }

  create(book: object): Promise<IBook> {
    return BooksModel.create(book);
  }
}
