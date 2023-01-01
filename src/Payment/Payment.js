import React from "react";
import "./payment.css";

const Payment = () => {
  return (
    <div>
      <div className="payment-field">
        <input
          type="text"
          className="same-size-field"
          placeholder="Custommer name"
        />
        <br />
        <input type="text" className="same-size-field" placeholder="email" />
        <br />
        <input
          type="text"
          className="same-size-field"
          placeholder="Service name"
        />
        <br />
        <p>Pay with</p>
        <input
          type="radio"
          name="paypal"
          value="paypal"
          id="paypal"
          className="radio"
        />
        <label htmlFor="paypal" className="labelMargin">
          Paypal
        </label>
        <input
          type="radio"
          name="credit"
          value="credit"
          id="credit"
          className="radio"
        />
        <label htmlFor="credit" className="labelMargin">
          Credit card
        </label>
        <br />
        <input
          type="text"
          name=""
          id=""
          className="same-size-field"
          placeholder="Card number"
        />
        <div>
          <input
            type="text"
            name=""
            id=""
            className="devideInp"
            placeholder="MM/YY"
          />
          <input
            type="text"
            name=""
            id=""
            className="devideInp"
            placeholder="CVC"
          />
        </div>
        <div className="confirmPay">
          <p className="payAmmount">You are paying $1000</p>
          <button className="paymentBtn">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
