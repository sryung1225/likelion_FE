/* ---------------------------------------------------------------------- */
/* HTML Attributes vs. DOM Properties                                     */
/* ---------------------------------------------------------------------- */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

let first = getNode(".first");

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인 - true/false
console.log(first.hasAttribute("class")); // ? true

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute("class")); // ? first
console.log(first.getAttribute("class") !== "first"); // ? false

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute("id", "box");
// <span class="first" id="box">hello</span>
first.setAttribute("some", "hello");
// <span class="first" id="box" some="hello">hello</span>

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute("some");
// <span class="first" id="box">hello</span>
// first.setAttribute("some", ""); // setAttribute 빈문자열 이용도 가능.. 대신 값이 남음

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes); // ? NamedNodeMap {0: class, 1: id, class: class, id: id, length: 2}


// for of를 쓸 수 있는가? 없는가? => 있다~
for(let i=0; i<first.attributes.length; i++){
  console.log(first.attributes[i]);
}
// ? class="first"
// ? id="box"

for(let value of first.attributes){
  console.log(value);
}
// ? class="first"
// ? id="box"
// 기본 for문 보다 for of가 사용하기 더 낫다 (iterator하므로)


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset



first.dataset.play = "playing"; // set
console.log(first.dataset.play); // get

function attr(node, prop, value){
  if(!value){
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  }
  // return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}
console.log(attr(".first", "id")); // ? box

// function attr 한 줄 표현
// const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);



// 유틸 함수
// get 함수 만들기
function getAttr(node, prop){
  if(typeof node == "string"){
    node = getNode(node);
    // node = document.querySelector(node);
  }
  return node.getAttribute(prop);
}
console.log(getAttr(".first", "class")); // ? first
console.log(getAttr(first, "data-play")); // ? playing


// set 함수 만들기
function setAttr(node, prop, value){
  // validation : 확인
  if(typeof node == "string") node = getNode(node);
  if(typeof prop != "string") throw new TypeError("setAttr 함수의 두 번째 인자는 string이여야 합니다.");
  if(prop.includes("data")) {
    let rest = prop.slice(5); // "data-" 앞 다섯글자 삭제
    node.dataset[rest] = value; // 그 다음 dataset에 넣어줘 value 제대로 적용
  } // 고도화 작업용
  if(!value) throw new SyntaxError("setAttr 함수의 세 번째 인자는 필수값입니다.");
  node.setAttribute(prop, value);
  // return하지 않는 이유는? set만 하고 값을 내는 것이 아니기 때문
}
setAttr(".first", "data-value", "hello"); // data-value="hello" 추가
// <span class="first" id="box" data-play="palying"></span>
// <span class="first" id="box" data-play="palying" data-value="hello"></span>