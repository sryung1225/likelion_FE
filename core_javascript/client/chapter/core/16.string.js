/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


// 문자열을 이용한 브라우저 체킹 방법
function checkBrowser(browserName) {
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("chrome") > -1) browser = "chrome";
  else if (ua.indexOf("edge") > -1) browser = "edge";
  else if (ua.indexOf("whale") > -1) browser = "whale";
  else if (ua.indexOf("safari") > -1) browser = "safari";
  else if (ua.indexOf("firefox") > -1) browser = "firefox";

  return browser === browserName;
}
// navigator.userAgent.toLowerCase() 정보 사용
// navigator.userAgent.toLowerCase().indexOf("chrome"); 양수값이 출력되면 그 브라우저임을 알려줌


let message = 'Less is more.';

// console.log(message);
// for(let key of message){
//   console.log(key);
// }

// length 프로퍼티
let stringTotalLength = message.length;
console.log("stringTotalLength:", stringTotalLength); // ? stringTotalLength: 13

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log("extractCharacter:", extractCharacter); // ? extractCharacter: L

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
// message = "more" + message[5];
// message[3] = "i";
// console.log(message);

// 부분 문자열 추출
let slice = message.slice(1, 6); // 1~5
console.log("slice:", slice); // ? slice: ess i
slice = message.slice(8); // 8~
console.log("slice:", slice); // ? slice: more.

let subString = message.substring(-1, 5);
console.log("substring:", subString); // ? substring: Less

// let subStr; : 없어짐


// 문자열 포함 여부 확인
let indexOf = message.indexOf("i"); // "i"가 존재하면 그 위치값 반환
console.log("indexOf:", indexOf); // ? indexOf: 5
indexOf = message.indexOf("X");
console.log("indexOf:", indexOf); // ? indexOf: -1

let lastIndexOf = message.lastIndexOf("i");
console.log("lastIndexOf:", lastIndexOf); // ? lastIndexOf: 5

let includes = message.includes("Less");
console.log("includes:", includes); // ? includes: true

let startsWith = message.startsWith(".");
console.log("startsWith:", startsWith); // ? startsWith: false

let endsWith = message.endsWith(".");
console.log("endsWith:", endsWith); // ? endsWith: true


// 공백 잘라내기
let trimLeft = message.trimLeft();
console.log("trimLeft:", trimLeft); // ? Less is more.

let trimRight = message.trimRight();
console.log("trimRight:", trimRight); // ? Less is more.

let trim = message.replace(/\s*/g, "");
console.log("trim:", trim); // ? trim: Lessismore.


// 텍스트 반복
let repeat = message.repeat(3);
console.log("repeat:", repeat);
// ? repeat: Less is more.Less is more.Less is more.


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log("toLowerCase:", toLowerCase); // ? toLowerCase: less is more.

let toUpperCase = message.toUpperCase();
console.log("toUpperCase:", toUpperCase); // ? toUpperCase: LESS IS MORE.

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, "").toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}