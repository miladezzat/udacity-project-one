import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send({ image: 'test' }));

export default router;
