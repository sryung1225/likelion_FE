/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

let j = 0;
while(j < 10){
  console.log("안녕");
  j++;
}

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
let i = 0;
while (i < frontEndDev.length){
  console.log("출력 " + frontEndDev[i]);
  i++;
}
// shift으로 순방향
let copyArray = frontEndDev.slice(); // 원본 무너지지 않게 slice 이용해서 얕복
while (copyArray.length){
  console.log("출력 " + copyArray.shift());
}

// while 문 (역순환 : 역방향)
i = frontEndDev.length;
while (i > 0){
  i--;
  console.log("출력 " + frontEndDev[i]);
}
// pop으로 역방향
copyArray = [...frontEndDev]; // 원본 무너지지 않게 전개구문 이용해서 얕복
while (copyArray.length){
  console.log("출력 " + copyArray.pop());
}

// 성능 진단 : 순환 vs. 역순환
