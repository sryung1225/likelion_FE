/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: "800px;",
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한

authUser = {
  uid:'user-id-asdA12k3klf',
  name: 'kindtiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: true,
  permission: 'paid', // free | paid
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser["permission"]);


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = "phone"; // phone | tel

function createUser(computedProp = "phone"){
  return {
    name: "unknown",
    email: "unknown@company.io",
    [computedProp]: "010-7169-0262"
  }
}

const user = createUser();

// 프로퍼티 포함 여부 확인
Object.prototype.SIGN = true;
for(let key in authUser){
  if({}.hasOwnProperty.call(authUser, key)){
    // console.log(key);
  }
}


// 프로퍼티 나열
// authUser : 객체
// key만 뫃아놓은 배열, value만 모아놓은 배열 만들기

// let keyArray = Object.keys(authUser);
// let valueArray = Object.values(authUser);
// console.log(valueArray);

// 화살표 함수 버전
// const getPropertiesList = object => Object.keys(object);
// let result = getPropertiesList(authUser);
// console.log(result);

function getPropertiesList(object){
  let result = [];
  for(let key in object){
    if({}.hasOwnProperty.call(object, key)){
      result.push(key);
    }
  }
  return result;
}

let result = getPropertiesList(authUser);

// 프로퍼티 제거 or 삭제
// 제거 : 값을 비움
// authUser["uid"] = null;
// 삭제 : 값을 지움. 없앰

// 유틸 함수를 만들 수 있을 것 같은데...?
// 1. 함수 이름 정하기
// 2. 인수(arguments)와 인자(parameter) 정하기
// 3. 확인하기(validation)
// 4. 리턴값(return)

function removeProperty(object, key){
  if(typeof object !== "object"){
    // throw
  }
  object[key] = null;
}
function deleteProperty(object, key){
  delete object[key];
}
deleteProperty(authUser, "uid");




// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// const student = {
//   name: name,
//   email: email,
//   authorization: authorization,
//   isLogin: isLogin
// }
// console.log(student);

// shorthand property
const student = {name, email, authorization, isLogin};
console.log(student);


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고, 그 배열의 갯수가 0이면 ? true : false
function isEmptyObject(object) {
  return Object.keys(object).length === 0;
}
console.log(isEmptyObject(authUser)); // ? false
const empty = {}
console.log(isEmptyObject(empty)); // ? true


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430
}
// 월급의 총 합을 구하세요. (Object.entries 사용)

// function totalSalaries(object){
//   let total = 0;
//   for(let keyValue of Object.entries(object)){
//     let key = keyValue[0];
//     let value = keyValue[1];
//     total += value;
//   }
//   return total;
// }
// console.log(totalSalaries(salaries)); // ? 690


/* -------------------------------------------------------------------------- */
/* 구조 분해 할당 : destructuring assignment                                        */
/* -------------------------------------------------------------------------- */
function totalSalaries(object){
  let total = 0;
  for(let [key, value] of Object.entries(object)){
    total += value;
  }
  return total;
}
console.log(totalSalaries(salaries)); // ? 690


// 배열 구조 분해 할당
let color = ['#ff0000', '#2b00ff', '#00ff2f'];
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];
const [red, blue, green] = color;
console.log(red); // ? #ff0000

// 발췌 : 중에서 green만 가져올 수 있음 : ,로 구분
// const [,, green] = color;
// console.log(red); // ? #00ff2f


// 객체 구조 분해 할당
const {John, Ann, Pete} = salaries;
console.log(Ann); // ? 160

// 주로 함수에서 가져와 사용이 많이 된다
const element = {
  width: 500,
  height: 500,
};
function getElementWidth(option, node) {
  const {width, height} = element;
}