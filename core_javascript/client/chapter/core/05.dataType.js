/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello"
let message2 = 'hello'
let message3 = `hello`; //template literal은 선언과 동시에 할당 해주어야 오류가 안남

console.log(message3);
let nickname = `안녕 내 이름은 ${message3} 야`;
console.log(nickname);
let nickname2 = `안녕 내 이름은 ${"안녕" / 3} 야`;
console.log(nickname2);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;
console.log('number : ', typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// BigInt
console.log(typeof 3252n);
// console.log(32534234n + 10);
// Uncaught TypeError: Cannot mix BigInt and other types
// BigInt는 BigInt 끼리 연산해야

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);
console.log(typeof(4>1));

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol("uid"));
console.log(typeof Math);
const func = function() {

}

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object
/* key value */
// const user = new Object();
const user = {
  name: "jjang",
  age: 27
} // 객체 리터럴 방식
console.log(user.name);

// Array
/* collection */
// let list = new Array();
let list = [10, 100, 1000, 1, 2, 3] // 배열 리터럴 방식

// function 함수
function sum(a, b){
  return a + b;
}
console.log(sum(10,30));

function fishBreadCase(favor){
  return `${favor}맛 붕어빵 입니다.`;
}
console.log(fishBreadCase("팥"));

const userFish = {
  name: "jjang",
  age: 27,
  fish: function(){
    return "뻐끔뻐끔";
  },
  alert: (aa) => {
    return aa;
  }
}
console.log(userFish.fish());
console.log(userFish.alert("hello"));

// this