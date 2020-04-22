import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

class Published {
  @Column()
  publisher: string;

  @Column()
  year: number;
}

@Entity('booksmodel')
export class Book {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  blogpost: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column(type => Published)
  published: Published;
}
