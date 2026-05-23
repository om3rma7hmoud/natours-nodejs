import Tour from '../models/tourModel.js';
import User from '../models/userModel.js';
import Booking from '../models/bookingModel.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

export const getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

export const getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  if (!tour) {
    return new AppError('There is no tour with that name', 404);
  }

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour
  });
});

export const getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Tour account'
  });
};

export const getMyTours = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user.id });

  const toursIDs = bookings.map((el) => el.tour);
  const tours = await Tour.find({ _id: { $in: toursIDs } });

  res.status(200).render('overview', {
    title: 'My Tours',
    tours
  });
});

// WITHOUT-API

// export const updateUserData = catchAsync(async (req, res, next) => {
//   const updatedUser = await User.findOneAndUpdate(
//     req.user.id,
//     {
//       name: req.body.name,
//       email: req.body.email
//     },
//     {
//       new: true,
//       runValidators: true
//     }
//   );

//   res.status(200).render('account', {
//     title: 'Your account',
//     user: updatedUser
//   });
// });

export const getLogin = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

export const getSignup = (req, res) => {
  res.status(200).render('signup', {
    title: 'Create your account'
  });
};
