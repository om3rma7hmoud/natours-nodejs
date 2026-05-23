import express from 'express';
import * as bookController from '../controllers/bookingController.js';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.use(authController.protect);

router.get('/checkout-session/:tourId', bookController.getCheckoutSession);

router.use(authController.restrictTo('admin', 'lead-guide'));

router
  .route('/')
  .get(bookController.getAllBookings)
  .get(bookController.createBooking);

router
  .route('/:id')
  .get(bookController.getBooking)
  .patch(bookController.updateBooking)
  .delete(bookController.deleteBooking);

export default router;
