import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import axios from "axios";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.STRIPE_PK_TEST_SECRET_KEY
);
const Stripe = ({ price, orderId }) => {
  const [clientSecret, setClientSecret] = useState("");
  const appearance = {
    theme: "stripe",
  };
  const options = {
    appearance,
    clientSecret,
  };
  const create_payment = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/order/create-payment",
        { price },
        { withCredentials: true }
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
    }
  };
  return (
    <div className="mt-4">
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm orderId={orderId} />
        </Elements>
      ) : (
        <button
          onClick={create_payment}
          className="px-10 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg bg-orange-500 text-white"
        >
          Start Payment
        </button>
      )}
    </div>
  );
};

export default Stripe;
