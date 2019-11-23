import { Router } from 'express';
import controller from './controller';

const router = Router({ mergeParams: true });

router.delete('/:additionId', controller.remove);
router.put('/:additionId', controller.updateStatus);

export const scheduleRouter = router;
