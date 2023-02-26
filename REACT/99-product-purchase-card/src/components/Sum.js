import React, { useState } from 'react';
import HelpTooltip from './HelpTooltip';

const Sum = ({ count, salePrice }) => {

  const [tooltip, setTooltip] = useState(false);
  const onTooltipToogle = () => {
    setTooltip(!tooltip);
  }
  return (
    <React.Fragment>
      <div className="product__sum">
        <b className="sum__text">
          총 상품 금액
          <div className="sum__help">
            <button
              className="help-btn" type="button" aria-label="도움말"
              onClick={onTooltipToogle}
              aria-expanded={tooltip}
              aria-haspopup="true"
            >?</button>
            {!tooltip ? null : <HelpTooltip onTooltipToogle={onTooltipToogle} />}
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