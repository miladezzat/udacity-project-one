import express from 'express';

import imagesRoutes from './routes/images';
import loggerMiddleware from './utils/logger-middleware';

const app = express();

app.use(loggerMiddleware);

app.use('/images', imagesRoutes);

export default app;
