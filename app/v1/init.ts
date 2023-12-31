import { Express, Request, Response } from 'express';
import ErrorHandler from './Handlers/ErrorHandler';
import Login from './Handlers/Login';
import RateLimiter from './Middlewares/RateLimiter';

const onBeforeInit = async (app: Express) => {
  app.use(RateLimiter);

  app.get('/', (req: Request, res: Response) => {
    res.json({
      response: 'Health Check!!'
    });
  });

  app.post('/api/v1/login', Login);
};

const onAfterInit = async (app: Express) => {
  // Set global error handler.
  app.use(ErrorHandler);
};

export { onAfterInit, onBeforeInit };
