/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = DAWN;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime){
  case MORNING:
    console.log("뉴스 기사 글을 읽는다.");
    break;
  case LUNCH:
    console.log("자주 가는 식당에 가서 식사를 한다.");
    break;
  case DINNER:
    console.log("동네 한바퀴를 조깅한다.");
    break;
  case NIGHT:
    console.log("친구에게 전화를 걸어 수다를 떤다.");
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING){
  console.log("뉴스 기사 글을 읽는다.");
} else if (thisTime === LUNCH){
  console.log("자주 가는 식당에 가서 식사를 한다.");
} else if (thisTime === DINNER){
  console.log("동네 한바퀴를 조깅한다.");
} else if (thisTime === NIGHT){
  console.log("친구에게 전화를 걸어 수다를 떤다.");
} else if (thisTime === LATE_NIGHT || thisTime === DAWN){
  console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.");
} else {
  console.log("숨을 쉰다.");
}

/* switch vs. if -------------------------------------------------------- */
// 무엇을 쓰는 상관은 없지만
// 조건이 많아지면 switch문이 훨씬 나은 느낌
// 딱 한개 문만 여는 느낌


// let num = +prompt('0:월 ~ 6:토 입력') ;
// switch(num) {
//   case 0:
//     console.log('일')
//     break;
//   case 1:
//     console.log('월')
//     break;
//   case 2:
//     console.log('화')
//     break;
//   case 3:
//     console.log('수')
//     break;
//   case 4:
//     console.log('목')
//     break;
//   case 5:
//     console.log('금')
//     break;
//   case 6:
//     console.log('토')
//     break;
// }

function getRandom(n){
  return Math.round(Math.random()*n);
}
function getDay(dayValue){
  switch(dayValue) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
    // return 으로 값을 뱉었기 때문에 break가 필요하지 않음
  }
}
let result = getRandom(6);
console.log(result);