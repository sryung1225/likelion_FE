/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const visual = getNode(".visual"); //1
const news = getNode(".news");     //2
const desc = getNode(".desc");     //3

// visual.addEventListener("click", function(){
//   console.log("%c visual", "background:dodgerblue");
// })
// news.addEventListener("click", function(){
//   console.log("%c news", "background:orange");
// })
// desc.addEventListener("click", function(){
//   console.log("%c desc", "background:hotpink");
// })

// desc 클릭 => desc news visual (+ 눈으로 티는 안나지만 body html)
// news 클릭 => news visual
// visual 클릭 => visual



// 버블링 막는 방법 : e.stopPropagation()

// desc.addEventListener("click", function(e){
//   e.stopPropagation();
//   console.log("%c desc", "background:hotpink");
// })

// desc 클릭 => desc
// news 클릭 => news visual
// visual 클릭 => visual


// currentTarget vs target

// visual.addEventListener("click", function(e){
//   console.log("target :", e.target);
//   console.log("currentTarget : ", e.currentTarget);
//   console.log("this : ", this);
//   console.log("%c visual", "background:dodgerblue");
// })

// target (클릭된 타겟) : desc / news / visual
// currentTarget (이벤트가 걸리는 타겟) : visual
// this = currentTarget

// Q. this가 아닌 e.currentTarget을 사용하는 이유가 따로 있을끼?
// A. visual.addEventListener("click", (e) => {}) 과 같이 화살표함수로 이벤트리스너를 만들면
//    화살표함수가 this를 binding 하지 않는 속성이 있어 this가 window를 가리킴
//    이 현상을 보호하기 위한 수단으로 e.currentTarget 사용이 더 안전하다


visual.addEventListener("click", function(e){
  css(".pop", "display", "block");
})
getNode(".pop").addEventListener("click",(e)=> {
  e.stopPropagation();
  css(".pop", "display", "none");
})



/* 캡처링 ----------------------------------------------------------------- */