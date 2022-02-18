import { Router } from 'express';
import imageProcessingService from '../services/images';
import { IProcessingImage } from '../services/images.interface';

const router = Router();

router.get('/', async (req, res) => {
  const args = req.query as unknown as IProcessingImage;

  res.setHeader("Content-Type", "image/jpeg");

  const thumbPath = await imageProcessingService(args);

  res.end(thumbPath);
});

export default router;
