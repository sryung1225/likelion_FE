import React from 'react';

const PurchaseBtn = () => {
  return (
    <React.Fragment>
      <button className="product__purchase" type="button">
        <i className="naver-shopping">네이버 쇼핑에서</i>
        구매하기
      </button>
    </React.Fragment>
  )
}

export default PurchaseBtn;