import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';

import { currentUserRouter } from './routes/CurrentUser';
import { signinRouter } from './routes/Signin';
import { signoutRouter } from './routes/Signout';
import { signupRouter } from './routes/Signup';
import { errorHandler } from './middlewares/ErrorHandler';
import { NotFoundError } from './errors/NotFoundError';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => { throw new NotFoundError(); });

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
};

start();