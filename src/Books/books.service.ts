import { Injectable } from '@nestjs/common';
import { Book } from './books.entity';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: MongoRepository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async create(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }
}
