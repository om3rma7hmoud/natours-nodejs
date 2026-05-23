import express from 'express';
import * as viewController from '../controllers/viewController.js';
import * as authController from '../controllers/authController.js';
import * as bookingController from '../controllers/bookingController.js';

const router = express.Router();

router.get('/', authController.isLoggedIn, viewController.getOverview);

router.get('/tour/:slug', authController.isLoggedIn, viewController.getTour);
router.get('/me', authController.protect, viewController.getAccount);
router.get(
  '/my-tours',
  bookingController.createBookingCheckout,
  authController.protect,
  viewController.getMyTours
);

router.get('/login', authController.isLoggedIn, viewController.getLogin);
router.get('/signup', authController.isLoggedIn, viewController.getSignup);

// WITHOUT-API

// router.post(
//   '/update-user-data',
//   authController.protect,
//   viewController.updateUserData
// );

export default router;
