import React from "react";
import styles from "./OrderList.module.css";
export const OrdersList = ({ orders, handleOrderClick }) => {
  return (
    <div className={styles.order}>
      <div>
        <h2 className={styles.order__orders}>Order List</h2>
        <p className={styles.order__paragraph}>
          Click on the order to see details
        </p>
      </div>
      <ul className={styles.order__list}>
        {orders.map((order) => (
          <li key={order.id} onClick={() => handleOrderClick(order)}>
            Order #{order.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

