import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="product-purchange-card">
      <img className="product__image" src="assets/productImage.jpg" alt="래피젠 코로나 자가 검사 키트" />
      <h2 className="product__title">래피젠 코로나 자가 검사 키트 2개입X1박스</h2>
      <div className="product__price">
        <b className="sale-rate" aria-label="할인율">88%</b>
        <span className="price">
          <del className="price--original" aria-label="정가">56,760원</del>
          <span className="price--sale" aria-label="할인가">6,370원</span>
        </span>
      </div>
      <div className="product__delivery">
        <span className="delivery__method">택배배송</span>
        <b className="delivery__price">3,000원
          <span className="delivery__price--desc">(주문시 결제)</span>
        </b>
        <p className="delivery__option">10개마다 부과</p>
      </div>
      <div className="product__count">
        <div className="counter">
          <button className="counter--btn" type="button" aria-label="상품 수량 1 빼기">-</button>
          <span className="counter--text" aria-label="상품 수량">1</span>
          <button className="counter--btn" type="button" aria-label="상품 수량 1 더하기">+</button>
        </div>
      </div>
      <div className="product__sum">
        <b className="sum__text">
          총 상품 금액
          <div className="sum__help">
            <button className="help-btn" type="button" aria-label="도움말" aria-expanded="false" aria-haspopup="true">?</button>
            <div className="help-tooltip">
              총 상품금액에 <span className="point">배송비는 포함되어 있지 않습니다.</span><br />결제시 배송비가 추가될 수 있습니다.
              <button className="help-tooltip-close" type="button" aria-label="도움말 닫기"></button>
            </div>
          </div>
        </b>
        <span className="sum__result">
          <span className="sum__count">총 수량 1개</span>
          <span className="sum__price" aria-label="총 상품 금액">6,370원</span>
        </span>
      </div>
      <button className="product__purchase" type="button">
        <i className="naver-shopping">네이버 쇼핑에서</i>
        구매하기
      </button>
    </div>
  );
}