import { Router } from 'express';
import controller from './controller';

const router = Router({ mergeParams: true });

router.get('/', controller.get);

export const scheduleRoutes = router;
