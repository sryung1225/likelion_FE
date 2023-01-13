//1. 인풋 밸류값 가져오기
//2. 이벤트 핸들러 연결하기
//3. 이벤트 기본동작 차단하기
//4. 두 수의 합을 더해주기
//5. 화면에 출력하기

const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const doneBtn = getNode("#done");
const result = getNode(".result");

function sum(e){
  e.preventDefault();
  let i = +firstInput.value + +secondInput.value;
  result.innerHTML = i;
}
doneBtn.addEventListener("click", sum);