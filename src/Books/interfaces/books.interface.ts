import { Document } from 'mongoose';

export interface IBook extends Document {
  blogpost: number;
  title: string;
  author: string;
  published: {
    publisher: string;
    year: number;
  };
}
