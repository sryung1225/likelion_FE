/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode(".first");

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log( first.className = "hola"); // ? hola
// <span class="hola">hello</span>

// first.classList.add("hello");
// <span class="first hello">hello</span>

// first.classList.remove("hello");
// <span class="first">hello</span>

// first.classList.toggle("hello");
// <span class="first hello">hello</span>

// console.log(first.classList.contains("is-active")); // ? false




// lib/dom/css.js 참고

addClass(".first", "hello");
// <span class="first hello">hello</span>

removeClass(".first", "hello");
// <span class="first">hello</span>

// toggleClass(".first", "hello");
// <span class="first hello">hello</span>




/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.transform = "rotate(360deg)"; // hello가 휘리릭 돌아감
first.style.backgroundColor = "red"; // 배경 적용



/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// let size = getComputedStyle(first).fontSize;
// console.log(size); // ? 32px

// let margin = getComputedStyle(first).margin;
// console.log(margin); // ? 0px



function getCss(node, prop){
  if(typeof node == "string") node = getNode(node);
  if(!prop in document.body.style){ // 정확한 css 속성인지 확인
    syntaxError("getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.");
  }
  return getComputedStyle(node)[prop];
  // 자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 . 사용 X
  // [ ] 각괄호 표기법
}
console.log(getCss(".first", "font-size")); // ? 32px


function setCss(node, prop, value){
  if(typeof node == "string") node = getNode(node);
  if(!prop in document.body.style){ // 정확한 css 속성인지 확인
    syntaxError("setCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.");
  }
  if(!value) syntaxError("setCSS 함수의 세 번째 인자는 필수값 입니다.");
  node.style[prop] = value;
}
setCss(".first", "color", "blue");

