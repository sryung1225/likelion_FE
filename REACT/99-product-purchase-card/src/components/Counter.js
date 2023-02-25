import React from 'react';

const Counter = () => {
  return (
    <React.Fragment>
      <div className="product__count">
        <div className="counter">
          <button className="counter--btn" type="button" aria-label="상품 수량 1 빼기">-</button>
          <span className="counter--text" aria-label="상품 수량">1</span>
          <button className="counter--btn" type="button" aria-label="상품 수량 1 더하기">+</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Counter;