
import { diceAnimation,
        disableElement,
        enableElement,
        getNode,
        getNodes,
        insertLast,
        invisibleElement,
        visibleElement,
        attr,
        clearContents } from "./lib/index.js";

// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기

// 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes(".buttonGroup > button");
const recordListWrapper = getNode(".recordListWrapper");

let count = 0;
let total = 0;

function renderRecordListItem(){
  let diceValue = +attr("#cube", "data-dice");
  let template = `
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${total += diceValue}</td>
    </tr>
  `;
  insertLast(".recordListWrapper tbody", template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}

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
  renderRecordListItem();
}
const handleReset = () => {
  count = 0;
  total = 0;
  invisibleElement(recordListWrapper);
  clearContents('.recordListWrapper tbody');
}

rollingDiceButton.addEventListener("click", handleRollingDice);
recordButton.addEventListener("click", handleRecord);
resetButton.addEventListener("click", handleReset);