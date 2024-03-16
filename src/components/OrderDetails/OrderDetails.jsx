import React from "react";
import styles from "./OrderDetails.module.css";

export const OrderDetails = ({ selectedOrder, products }) => {
  const calculateTotal = () => {
    let total = 0;

    if (selectedOrder) {
      selectedOrder.items.forEach((item) => {
        total += parseFloat(item.price) * parseInt(item.quantity);
      });
    }

    products.forEach((product) => {
      total += parseFloat(product.price) * parseInt(product.quantity);
    });

    return total.toFixed(2);
  };
  const hasProductsInTable = products.length > 0;

  return (
    <div>
      <div className={styles.details}>
        {selectedOrder ? (
          <div>
            <h2 className={styles.details__orders}>
              Numero de Orden #{selectedOrder.number}
            </h2>
            {selectedOrder.items.map((item) => (
              <div key={item.sku} className={styles.details__product}>
                <span>{item.sku}</span>
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>{item.price}</span>
              </div>
            ))}
            {hasProductsInTable && (
              <div>
                <h2 className={styles.details__orders}>
                  Nuevo producto agregado
                </h2>
                <div className={styles.details__table}>
                  {products.map((product, index) => (
                    <div key={index} className={styles.details__product}>
                      <span>{product.sku}</span>
                      <span>{product.name}</span>
                      <span>{product.quantity}</span>
                      <span>{product.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.details__paragraph}>
            <p className={styles.details__paragraph}>No hay nada seleccionado</p>
          </div>
        )}
      </div>
      <div className={styles.details__total}>
        <span>Total a pagar: ${calculateTotal()}</span>
      </div>
    </div>
  );
};
