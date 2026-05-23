import axios from 'axios';
import { showAlert } from './alerts.js';
const stripe = Stripe(
  'pk_test_51TZFbTKLiyrqWHTeJYRj33Xz6R94t8XQ3Vx4RXUFZD4apdja4TIKBloCpAo25WDEPBlWm2GXFPIstAxxelpIQUzc00iCqgNw9V'
);

export const bookTour = async (tourId) => {
  try {
    const res = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    await stripe.redirectToCheckout({
      sessionId: res.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
