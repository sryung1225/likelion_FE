import React from 'react';

const Counter = ({ count, setCount }) => {
  const onIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <React.Fragment>
      <div className="product__count">
        <div className="counter">
          <button
            className="counter--btn" type="button" aria-label="상품 수량 1 빼기"
            onClick={onDecrease}
          >-</button>
          <span className="counter--text" aria-label="상품 수량">
            {count}
          </span>
          <button
            className="counter--btn" type="button" aria-label="상품 수량 1 더하기"
            onClick={onIncrease}
          >+</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Counter;