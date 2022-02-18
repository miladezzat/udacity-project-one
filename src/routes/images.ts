import { Router } from 'express';
import { StatusCodes } from 'error-handler-e2';
import imageProcessingService from '../services/images';
import { IProcessingImage } from '../services/images.interface';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const args = req.query as unknown as IProcessingImage;

    const thumbPath = await imageProcessingService(args);

    res.setHeader('Content-Type', 'image/jpeg');

    return res.status(StatusCodes.OK).end(thumbPath);
  } catch (error: unknown) {
    const ourError = error as { message: string };
    return res
      .status(400)
      .send(
        `The following error occurred processing your image remedy and try again: ${ourError?.message}`
      );
  }
});

export default router;
