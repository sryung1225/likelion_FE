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



// lib/dom/css.js 참고

// console.log(getCss(".first", "font-size")); // ? 32px
// setCss(".first", "color", "blue"); // hello 색상 파란색 적용
console.log(css(".first", "font-size"));
css(".first", "color", "blue");
