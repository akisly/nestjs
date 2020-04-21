import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { BooksModule } from './Books/books.module';

@Module({
  imports: [UsersModule, BooksModule],
})
export class AppModule {}
