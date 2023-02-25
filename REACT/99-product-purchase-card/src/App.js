import React, { useState } from "react";
import "./style.css";
import Product from './components/Product';
import Counter from './components/Counter';
import Sum from './components/Sum';
import PurchaseBtn from './components/PurchaseBtn';

export default function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="product-purchange-card">
      <Product />
      <Counter count={count} setCount={setCount} />
      <Sum />
      <PurchaseBtn />
    </div>
  );
}