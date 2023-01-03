/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


// rest parameter
const calculateTotal = (...arg) => {
  let total = 0;
  arg.forEach(item => {
    total += item;
  })
  console.log(total);
  return;
}
let resultX = calculateTotal(10000, 8900, 1360, 2100);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a+b+c+d;


// 화살표 함수와 this
function normalFunction(){
  console.log("일반함수 : ", this);
}
const arrowFunction = () => {
  console.log("화살표함수 : ", this);
}
// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 좋다

// ! 일반 함수 => 나, 화살표 함수 => 내 위의 부모 (즉, 전역인 window 나옴)
// * 객체 안에서 함수 메서드는 일반 함수가 낫다
const user = {
  name: "ryung",
  age: 28,
  address: "경기도 용인시",
  grades: [80,90,100],
  // totalGrades: () => {
  totalGrades: function(){
    let total = 0;
    this.grades.forEach(function(item){
      total += item
    })
    return total;
  }
}
console.log(user.totalGrades());


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow;
// pow(2,53) // 9007199254740992

// // repeat(text: string, repeatCount: number): string;
// let repeat;

// repeat("hello", 3); // ? hellohellohello