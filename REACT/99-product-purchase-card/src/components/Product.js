import React from 'react';

const Product = ({ saleRate, originalPrice, salePrice }) => {
  return (
    <React.Fragment>
      <img className="product__image" src="assets/productImage.jpg" alt="래피젠 코로나 자가 검사 키트" />
      <h2 className="product__title">래피젠 코로나 자가 검사 키트 2개입X1박스</h2>
      <div className="product__price">
        <b className="sale-rate">{saleRate}%</b>
        <span className="price">
          <del className="price--original">{originalPrice.toLocaleString('ko-KR')}원</del>
          <b className="price--sale">{salePrice.toLocaleString('ko-KR')}원</b>
        </span>
      </div>
      <div className="product__delivery">
        <span className="delivery__method">택배배송</span>
        <b className="delivery__price">3,000원
          <span className="delivery__price--desc">(주문시 결제)</span>
        </b>
        <p className="delivery__option">10개마다 부과</p>
      </div>
    </React.Fragment>
  )
}

export default Product;