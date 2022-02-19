/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-unused-vars */
declare namespace Express {
  export interface Request {
    currentUser?: {
      id: string;
      email: string;
    }
  }
}
