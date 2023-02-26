import React from 'react';

const Sum = ({ count, salePrice }) => {
  return (
    <React.Fragment>
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
          <span className="sum__count">총 수량 {count}개</span>
          <span className="sum__price" aria-label="총 상품 금액">{(salePrice * count).toLocaleString('ko-KR')}원</span>
        </span>
      </div>
    </React.Fragment>
  )
}

export default Sum;