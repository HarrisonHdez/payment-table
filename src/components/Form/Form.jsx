import React, { useState } from "react";
import styles from "./Form.module.css";

export const Form = ({ onAddProduct }) => {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!sku.trim()) {
      newErrors.sku = "El SKU es requerido";
    }
    if (!name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    if (!quantity.trim()) {
      newErrors.quantity = "La cantidad es requerida";
    }
    if (!price.trim()) {
      newErrors.price = "El precio es requerido";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const newProduct = { sku, name, quantity, price };
    onAddProduct(newProduct);
    setSku("");
    setName("");
    setQuantity("");
    setPrice("");
    setErrors({});
  };

  const handleInputFocus = (fieldName) => {
    const newErrors = { ...errors };
    delete newErrors[fieldName];
    setErrors(newErrors);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.form__title}>Agregar Producto</h2>
      <div className={styles.form__content}>
        <div className={styles.form__group}>
          <label htmlFor="sku">SKU:</label>
          <input
            type="text"
            id="sku"
            placeholder="Sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            onFocus={() => handleInputFocus("sku")}
            className={`${styles.input} ${errors.sku && styles.errorInput}`}
          />
          {errors.sku && (
            <span className={styles.errorMessage}>{errors.sku}</span>
          )}
        </div>
        <div className={styles.form__group}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => handleInputFocus("name")}
            className={`${styles.input} ${errors.name && styles.errorInput}`}
          />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name}</span>
          )}
        </div>
        <div className={styles.form__group}>
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="text"
            id="quantity"
            placeholder="Cantidad"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            onFocus={() => handleInputFocus("quantity")}
            className={`${styles.input} ${
              errors.quantity && styles.errorInput
            }`}
          />
          {errors.quantity && (
            <span className={styles.errorMessage}>{errors.quantity}</span>
          )}
        </div>
        <div className={styles.form__group}>
          <label htmlFor="price">Precio:</label>
          <input
            type="text"
            id="price"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            onFocus={() => handleInputFocus("price")}
            className={`${styles.input} ${errors.price && styles.errorInput}`}
          />
          {errors.price && (
            <span className={styles.errorMessage}>{errors.price}</span>
          )}
        </div>
        <button className="button" type="submit">
          Agregar Producto
        </button>
      </div>
    </form>
  );
};
