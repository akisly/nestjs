import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './Users/users.module';
import { BooksModule } from './Books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGOLAB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule,
    BooksModule,
  ],
})
export class AppModule {}
