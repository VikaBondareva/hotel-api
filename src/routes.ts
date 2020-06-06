import { Router, Request, Response } from 'express';
import { version } from '../package.json';
import passport from 'passport';
import {
  employeeRouter,
  roomRouter,
  additionRouter,
  serviceRouter,
  bookingRouter,
  clientRouter,
  activitiesRouter
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
router.use('/rooms', roomRouter);
router.use('/additions', additionRouter);
router.use('/services', serviceRouter);
router.use('/bookings', bookingRouter);
router.use('/clients', clientRouter);
router.use('/activities', activitiesRouter);
// router.use('/payments', paymentsRotes);

export default router;
