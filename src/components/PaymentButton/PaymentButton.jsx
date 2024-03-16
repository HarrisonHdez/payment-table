import React from "react";


export const PaymentButton = ({ onClick }) => {
  return (
    <button className="button"  onClick={onClick}>
      Pagar
    </button>
  );
};

