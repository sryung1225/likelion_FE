
import { getInputValue,
        getNode,
        getRandom,
        clearContents,
        insertLast,
        isNumericString,
        addClass,
        removeClass,
        showAlert,
        copyText } from "./lib/index.js";
import { jujeobData } from "./data/data.js";


const submit = getNode("#submit");
// console.log(submit);
// console.log(getRandom(5));
const result = getNode(".result");

function clickSubmitHandler(e){
  e.preventDefault();

  let name = getInputValue("#nameField");
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];
  // console.log(name);
  // console.log(list);
  // console.log(pick);

  if(!name || isNumericString(name)){
    // console.log("이름을 제대로 입력해주세요!");
    showAlert(".alert-error", "정확한 이름을 입력해주세요!", 2000);
    addClass(result, "shake");
    setTimeout(()=>{
      removeClass(result, "shake");
    }, 1000);
    // GSAP
    // gsap.fromTo(result, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

function clickCopyHandler(){
  let text = result.textContent;
  // copyText()에서 사용된 navigator.clipboard.writeText(text); 는 Promise. 약속 구문
  copyText(text).then(() => { // copyText가 완벽하게 이뤄지고 나면 수행
    showAlert(".alert-success", "클립보드가 복사되었습니다!", 2000);
  });
}

submit.addEventListener("click", clickSubmitHandler);
result.addEventListener("click", clickCopyHandler);