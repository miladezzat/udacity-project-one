import dotenv from 'dotenv'
import app from './app';

dotenv.config();

const port = process.env.PORT || 3000;

const bootstrap = () => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port: ${port} `);
  });
};

bootstrap();
