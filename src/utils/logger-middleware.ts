import { Request, Response, NextFunction } from 'express';
import { promises as fsPromises } from 'fs';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const date = new Date();

  const seconds: number = date.getSeconds();
  const minutes: number = date.getMinutes();
  const hours: number = date.getHours();

  const { path, query, body, method } = req;

  const logs = {
    time: `${hours}:${minutes}:${seconds}`,
    method,
    path,
    query,
    body,
  };

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(logs));

  fsPromises.appendFile('logs', `\n${JSON.stringify(logs)}`, {
    encoding: 'utf-8',
    flag: 'a+',
  });

  next();
};

export default loggerMiddleware;
