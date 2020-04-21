import { Schema } from 'mongoose';
import connections from '../app.conection';
import { IUser } from './interfaces/users.interface';

const UsersSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    verified: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: 'usersmodel',
    versionKey: false,
  },
);

export default connections.model<IUser>('UsersModel', UsersSchema);
