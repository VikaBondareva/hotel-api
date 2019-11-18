import { Router, Request, Response } from 'express';
import { version } from '../package.json';
import {
  employeeRouter,
  roomRouter,
  additionRouter,
  serviceRouter,
  bookingRouter,
  clientRouter
  // paymentsRotes
} from './api';
const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'pass',
    description: 'Parcel Pending API',
    version
  });
});

// router.use('/clients', clientRouter);
router.use('/employees', employeeRouter);
// router.use('/auth', authRouter);
router.use('/rooms', roomRouter);
router.use('/additions', additionRouter);
router.use('/services', serviceRouter);
router.use('/bookings', bookingRouter);
router.use('/clients', clientRouter);
// router.use('/payments', paymentsRotes);

export default router;
