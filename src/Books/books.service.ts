import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBook } from './interfaces/books.interface';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel('Books') private readonly booksModel: Model<IBook>,
  ) {}

  async findAll(): Promise<IBook[]> {
    return await this.booksModel.find({}).exec();
  }

  async create(book: object): Promise<IBook> {
    return await this.booksModel.create(book);
  }
}
