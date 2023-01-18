
import { getNode } from "../dom/getNode.js"
import { isNumber, isObject } from '../utils/typeOf.js';

const first = getNode(".first");

function delay(callback, timeout = 1000){
  setTimeout(callback, timeout);
}

// 콜백지옥
// delay(()=>{
//   first.style.top = "-100px";
//   delay(()=>{
//     first.style.transform = "rotate(360deg)";
//     delay(()=>{
//       first.style.top = "0px";
//     })
//   })
// })

// 프라미스
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공했습니다",
  errorMessage: "알 수 없는 오류가 발생했습니다."
}
export function delayP(options = {}){
  let config = {...defaultOptions}; // spread 통해서 얕은 복사 : 기본값
  
  if(isNumber(options)){
    config.timeout = options;
  }
  if(isObject(options)){
    config = {...config, ...options}; // 기본값이 아닌 새로 받은 값을 섞기 위해 객체를 합성함 : 객체 합성 mixin
  }

  const {shouldReject, timeout, data, errorMessage} = config;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve("성공!") : reject(errorMessage);
    }, timeout);
  })
}
// delayP({
//   data: "진짜 성공",
//   errorMessage: "오류가 발생했다!!"
// }).then((res)=>{
//   console.log(res);
// })
// delayP(3000).then((res)=>{
//   console.log(res);
// })


// 위 콜백지옥을 프라미스를 이용해 개선할 수 있음
// delayP()
// .then(() => {
//   first.style.top = "-100px";
//   return delayP();
// })
// .then(() => {
//   first.style.transform = "rotate(360deg)";
//   return delayP();
// })
// .then(() => {
//   first.style.top = "0px";
// });