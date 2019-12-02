import { Router } from 'express';
import controller from './controller';

const router = Router({ mergeParams: true });

router.get('/', controller.get);
router.get('/:bookingId', controller.getById);
router.put('/:bookingId', controller.update);
router.delete('/:bookingId', controller.remove);

export const bookingRouter = router;
