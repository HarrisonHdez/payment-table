import React, { useEffect, useState } from "react";
import styles from "./PaymentsTable.module.css";
import { fetchOrders } from "../../api/orders";
import { SiCashapp } from "react-icons/si";
import { OrdersList } from "../OrdersList/OrdersList.";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { PaymentButton } from "../PaymentButton/PaymentButton";
import { PaymentModal } from "../PaymentModal/PaymentModal";

const PaymentsTable = ({ products }) => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersData = await fetchOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, []);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handlePayClick = () => {
    setIsPaymentSuccessful(true);
  };

  const handleCloseModal = () => {
    setIsPaymentSuccessful(false);
  };

  const hasProductsInTable = selectedOrder && selectedOrder.items.length > 0;

  return (
    <section className={styles.payment}>
      <div className={styles.payment__head}>
        <h1 className={styles.payment__title}>Tabla de pagos</h1>
        <div className={styles.payment__icon}>
          <SiCashapp color="#ea7c69" fontSize={30} />
        </div>
      </div>

      <div className={styles.payment__wrapper}>
        <OrdersList orders={orders} handleOrderClick={handleOrderClick} />
        <div className={styles.payment__content}>
          <OrderDetails selectedOrder={selectedOrder} products={products} />
          <PaymentButton onClick={handlePayClick} />
          {isPaymentSuccessful && hasProductsInTable && (
            <PaymentModal onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentsTable;
