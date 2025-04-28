import { Router } from 'express';
import { loginHandler } from '../handlers/authHandler';

const router = Router();
router.post('/login', loginHandler);

export default router;
