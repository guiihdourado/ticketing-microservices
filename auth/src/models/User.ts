/* eslint-disable no-use-before-define */
import mongoose from 'mongoose';

interface IUserAttrs {
  email: string;
  password: string;
}

interface IUserDoc extends mongoose.Document {
  email: string;
  password: string;
}

interface IUserModel extends mongoose.Model<IUserDoc> {
  build(attrs: IUserAttrs): IUserDoc;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: IUserAttrs) => new User(attrs);

const User = mongoose.model<IUserDoc, IUserModel>('User', userSchema);

export { User };
