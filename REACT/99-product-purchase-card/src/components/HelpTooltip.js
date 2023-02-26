import React from 'react';

const HelpTooltip = ({ onTooltipToogle }) => {
  return (
    <React.Fragment>
      <div className="help-tooltip">
        총 상품금액에 <span className="point">배송비는 포함되어 있지 않습니다.</span><br />결제시 배송비가 추가될 수 있습니다.
        <button
          className="help-tooltip-close" type="button" aria-label="도움말 닫기"
          onClick={onTooltipToogle}
        ></button>
      </div>
    </React.Fragment>
  )
}

export default HelpTooltip;