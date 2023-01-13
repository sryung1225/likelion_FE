import {
  getNode,
  css,
  addClass,
  removeClass,
  refError,
  typeError
} from "./lib/index.js";


//1. 인풋 밸류값 가져오기
//2. 이벤트 핸들러 연결하기
//3. 이벤트 기본동작 차단하기
//4. 두 수의 합을 더해주기
//5. 화면에 출력하기

const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const doneBtn = getNode("#done");
const result = getNode(".result");

// node가 input인지를 한 번 검토하고 value를 줌
function getInputValue(node){
  if(typeof node === "string") node = getNode(node);
  if(node.tagName !== "INPUT") refError("getInputValue 함수는 INPUT ELEMENT만 허용합니다.");
  return node.value;
}

const sum = (A, B) => A+B;

function clearContents(node){
  if(typeof node === "string") node = getNode(node);
  node.textContent = "";
}

function calc(e){
  e.preventDefault();
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);
  clearContents(result);
  insertLast(result, total);
}

doneBtn.addEventListener("click", calc);