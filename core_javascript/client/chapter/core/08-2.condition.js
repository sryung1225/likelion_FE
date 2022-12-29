/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */


// 사이 범위 확인하기
let age = 13;
if(age >= 14 && age <= 90){
  console.log(`${age}세는 이용이 가능합니다.`);
} else {
  console.log(`${age}세는 이용이 불가능합니다.`);
}





let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && {thisIfFalsy:false};
console.log(whichFalsy); // ? {thisIfFalsy:false}
// 모두 truthy 해서 마지막 값 반환
whichFalsy = true && "" && [] && {thisIfFalsy:false};
console.log(whichFalsy); // ? ""
// falsy한 빈 문자열 "" 반환


// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsFalsy: true };
console.log(whichTruthy); // ? 2
// truthy한 [2.3].length 반환


let userName = prompt("사용자 이름을 입력해주세요", "");
if (userName.toUpperCase() === "ADMIN"){
  let pw = prompt("비밀번호를 입력해 주세요.", "");
  if(pw === "TheMaster"){
    console.log("환영합니다.");
  } else {
    console.log("취소되었습니다.");
  }
} else if (userName === "" || userName === null){
  console.log("취소했습니다.");
} else {
  console.log("누군지 모릅니다.");
}