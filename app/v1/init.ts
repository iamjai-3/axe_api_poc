import { Express, Request, Response } from 'express';
import ErrorHandler from './Handlers/ErrorHandler';

const onBeforeInit = async (app: Express) => {
  app.get('/', (req: Request, res: Response) => {
    res.json({
      response: 'Health Check!!'
    });
  });
};

const onAfterInit = async (app: Express) => {
  // Set global error handler.
  app.use(ErrorHandler);
};

export { onAfterInit, onBeforeInit };
