import React from 'react';

const PurchaseBtn = ({ count }) => {
  return (
    <React.Fragment>
      <button
        type="button"
        className="product__purchase"
        disabled={!count}
      >
        <i className="naver-shopping">네이버 쇼핑에서</i>
        구매하기
      </button>
    </React.Fragment >
  )
}

export default PurchaseBtn;