import React from "react";
import "./style.css";
import Product from './components/Product';
import Counter from './components/Counter';
import Sum from './components/Sum';
import PurchaseBtn from './components/PurchaseBtn';

export default function App() {
  return (
    <div className="product-purchange-card">
      <Product />
      <Counter />
      <Sum />
      <PurchaseBtn />
    </div>
  );
}