import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51KD7j3GkUlgI2dhSMkCNb2ySqD3Qb24F9P49IHOTXrXRFAUE0PcgSkk8hEPlm9ZI8zrD0XGw6gudCf5OJgmnCqmr00kfewupzj'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
