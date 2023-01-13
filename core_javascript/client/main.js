
import { getInputValue, getNode, getRandom, clearContents, insertLast, isNumericString, addClass, removeClass, showAlert } from "./lib/index.js";
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
    showAlert(".alert-error", "이름을 입력해주세요!", 2000);
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}
submit.addEventListener("click", clickSubmitHandler);