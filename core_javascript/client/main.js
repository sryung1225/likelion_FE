
import { diceAnimation,
        disableElement,
        enableElement,
        getNode,
        getNodes,
        invisibleElement,
        visibleElement } from "./lib/index.js";

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기

// 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes(".buttonGroup > button");
const recordListWrapper = getNode(".recordListWrapper");

// IIFE 패턴 적용
const handleRollingDice = (() => {
  let isRolling = false;
  let stopAnimation;
  return () => {
    if(!isRolling){
      // console.log("첫번째 클릭");
      stopAnimation = setInterval(diceAnimation, 100);
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      // console.log("두번째 클릭");
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }
    isRolling = !isRolling;
  }
})();
const handleRecord = () => {
  visibleElement(recordListWrapper);
}
const handleReset = () => {
  invisibleElement(recordListWrapper);
}

rollingDiceButton.addEventListener("click", handleRollingDice);
recordButton.addEventListener("click", handleRecord);
resetButton.addEventListener("click", handleReset);
// let eventOff = bindEvent(rollingDiceButton, "click", handlerRollingDice);