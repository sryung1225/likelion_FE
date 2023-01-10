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

console.log(getAttr(".first", "class")); // ? first
console.assert(getAttr('.first','class') !== "first"); // Assertion failed: console.assert // 에러일 때 콘솔창 노출
console.log(getAttr(first, "data-play")); // ? playing

setAttr(".first", "data-value", "hello"); // data-value="hello" 추가

console.log(attr(".first", "id")); // ? box


let result = attr(".second", "id");
console.log(result); // ? null // 원래 id가 없기 때문
attr(".second", "id", "wow"); // id="wow" 셋팅
console.log(attr(".second", "id")); // ? wow