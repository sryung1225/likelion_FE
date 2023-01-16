
export function copyText(text){
  return navigator.clipboard.writeText(text);
  // console.log(navigator.clipboard.writeText(text)); // ? Promise {<pending>}
  // return을 해줘서 Promise를 내보내줌
}