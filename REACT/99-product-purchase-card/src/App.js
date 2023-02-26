import React, { useState } from "react";
import "./style.css";
import Product from './components/Product';
import Counter from './components/Counter';
import Sum from './components/Sum';
import PurchaseBtn from './components/PurchaseBtn';

export default function App() {
  const saleRate = 88;
  const originalPrice = 56760;
  const salePrice = Math.floor(originalPrice * (100 - saleRate) / 100);

  const [count, setCount] = useState(1);

  return (
    <div className="product-purchange-card">
      <Product saleRate={saleRate} originalPrice={originalPrice} salePrice={salePrice} />
      <Counter count={count} setCount={setCount} />
      <Sum count={count} salePrice={salePrice} />
      <PurchaseBtn count={count} />
    </div>
  );
}