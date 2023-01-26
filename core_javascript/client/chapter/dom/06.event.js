/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])
// 우리는 3. 메서드 방식을 사용할거다~


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const first = getNode(".first");
const second = getNode(".second");

function handler(){
  console.log("hit!");
  // css(".second", "display", "none");
}

first.addEventListener("click", handler);


// lib/dom/bindEvent.js 참고
// const off = bindEvent(".first", "click", handler);
// bindEvent(".second", "click", off);




// 실습 : Move the ball across the field
const ground = getNode(".ground");
const ball = getNode(".ball");

ground.addEventListener("click", function(e){
  console.log("ground hit!");
  // console.log(e); // ? PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …} // 이벤트 객체
  console.log(e.offsetX, e.offsetY); // ? 22 19

  let posX = e.offsetX - ball.offsetWidth/2;
  let posY = e.offsetY - ball.offsetHeight/2; // 마우스 클릭한 위치에 축구공이 중앙에 오도록

  ball.style.transform = `translate(${posX}px, ${posY}px)`;
})

// debounce & throttle
function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}
function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}

ground.addEventListener("mousemove", debounce((e)=>{
  console.log(e.offsetX, e.offsetY);

  let posX = e.offsetX;
  let posY = e.offsetY;

  const emotion = `<div class="emotion" style="left: ${posX}px; top: ${posY}px;">🤔</div>`;

  insertLast(ground, emotion);
}, 1000))