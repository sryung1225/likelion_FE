
// let arr = [{
//   name:'tiger',
//   age: 34,
// },2,3,4];
// arr[0].name  // ? tiger


// 이벤트 위임 !

const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

// 비주얼 안에 있는 이미지를 가져온다
// 이미지의 src 속성에 접근한다
// src의 값을 index로 바꾼다
// alt 변경

const navigation = getNode(".navigation");
const visualImage = getNode(".visual img");

function makeArray(arrayLike){
  return Array.from(arrayLike)
}

function handler(e){
  let target = e.target.closest("li");
  if(!target) return;

  let list = makeArray(navigation.children);
  let index = attr(target, "data-index");

  list.forEach(item=>removeClass(item, "is-active"));

  attr(visualImage, "src", `./assets/part01/${data[index-1].src}`);
  attr(visualImage, "alt", data[index-1].alt);

  addClass(target, "is-active");
}
navigation.addEventListener("click", handler);















