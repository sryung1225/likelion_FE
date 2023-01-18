
import { getNode } from "../dom/getNode.js"

const first = getNode(".first");

function delay(callback, timeout = 1000){
  setTimeout(callback, timeout);
}

// 콜백지옥
delay(()=>{
  first.style.top = "-100px";
  delay(()=>{
    first.style.transform = "rotate(360deg)";
    delay(()=>{
      first.style.top = "0px";
    })
  })
})

// 프라미스
function delayP(timeout = 1000){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공!");
      // reject("실패!");
    }, timeout);  // ? Promise {<pending>}
  })
}
// console.log(delayP()); // ? Promise {<pending>}
// delayP().then(() => {});
delayP()
.then((res) => {
  console.log(res);
})

// 위 콜백지옥을 프라미스를 이용해 개선할 수 있음
delayP()
.then(() => {
  first.style.top = "-100px";
  return delayP();
})
.then(() => {
  first.style.transform = "rotate(360deg)";
  return delayP();
})
.then(() => {
  first.style.top = "0px";
});