// src/App.jsx
import React, { useState } from "react";
import { Form } from "./components/Form/Form";
import PaymentsTable from "./components/PaymentsTable/PaymentsTable";

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="home">
      <div className="home__content">
        <PaymentsTable products={products} />
        <Form onAddProduct={handleAddProduct} />
      </div>
    </div>
  );
}

export default App;
