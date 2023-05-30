import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/CurrentUser';
import { signinRouter } from './routes/Signin';
import { signoutRouter } from './routes/Signout';
import { signupRouter } from './routes/Signup';
import { errorHandler } from './middlewares/ErrorHandler';
import { NotFoundError } from './errors/NotFoundError';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: true,
}));

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => { throw new NotFoundError(); });

app.use(errorHandler);

export { app };
