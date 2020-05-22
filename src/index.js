import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_API_KEY
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
);
