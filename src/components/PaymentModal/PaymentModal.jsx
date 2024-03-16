import React from "react";
import styles from "./PaymentModal.module.css";
import { ImPaypal } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
export const PaymentModal = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <button className={styles.modal__button} onClick={onClose}>
        <IoCloseSharp />
      </button>
      <div className={styles.modal__content}>
        <ImPaypal color="ea7c69" size="50" />
        <h2>Pago exitoso</h2>
        <p>¡El pago se ha realizado correctamente!</p>
      </div>
    </div>
  );
};
