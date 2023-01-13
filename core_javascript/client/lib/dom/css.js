// addClass
export function addClass(node, className){
  if(typeof node == "string"){
    node = getNode(node);
  }
  if(typeof className !== "string"){
    TypeError("addClass 함수의 두 번째 인자는 문자 타입이여야 합니다.");
  }
  node.classList.add(className);
}

// removeClass
export function removeClass(node, className){
  if(typeof node == "string"){
    node = getNode(node);
  }
  if(!className){
    node.className = "";
    return;
  }
  if(typeof className !== "string"){
    typeError("removeClass 함수의 두 번째 인자는 문자 타입이여야 합니다.");
  }
  node.classList.remove(className);
  // 변경하기 : 대상의 클래스를 지운다 => set만 하기 때문에 return 할 필요 없음
}

// toggleClass
export function toggleClass(node, className){
  if(typeof node == "string"){
    node = getNode(node);
  }
  if(typeof className !== "string"){
    typeError("toggleClass 함수의 두 번째 인자는 문자 타입이여야 합니다.");
  }
  node.classList.toggle(className)
}

// getCss
function getCss(node, prop){
  if(typeof node == "string") node = getNode(node);
  if(!prop in document.body.style){ // 정확한 css 속성인지 확인
    syntaxError("getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.");
  }
  return getComputedStyle(node)[prop];
  // 자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 . 사용 X
  // [ ] 각괄호 표기법
}

// setCss
function setCss(node, prop, value){
  if(typeof node == "string") node = getNode(node);
  if(!prop in document.body.style){ // 정확한 css 속성인지 확인
    syntaxError("setCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.");
  }
  if(!value) syntaxError("setCSS 함수의 세 번째 인자는 필수값 입니다.");
  node.style[prop] = value;
}

// css (getCss + setCss)
export const css = (node, prop, value) => !value ? getCss(node, prop) : setCss(node, prop, value);