import { Schema } from 'mongoose';

export const BooksSchema: Schema = new Schema(
  {
    blogpost: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      required: true,
    },
    published: {
      publisher: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
    },
  },
  {
    collection: 'booksmodel',
    versionKey: false,
  },
);
