import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './Users/users.module';
import { BooksModule } from './Books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://akisly:Sherstnova2306@claster0-dzby6.mongodb.net/lesson9?retryWrites=true&w=majority`,
      { useNewUrlParser: true },
    ),
    UsersModule,
    BooksModule,
  ],
})
export class AppModule {}
