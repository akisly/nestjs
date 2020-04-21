import * as mongoose from 'mongoose';

const MONGO_URI: string = `mongodb+srv://akisly:Sherstnova2306@claster0-dzby6.mongodb.net/lesson9?retryWrites=true&w=majority`;

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set('useCreateIndex', true);

export default mongoose.createConnection(MONGO_URI, connectOptions);
