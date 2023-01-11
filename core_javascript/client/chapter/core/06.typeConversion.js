/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */
// String

// number -> "2022"
const YEAR = 2022;
console.log(String(YEAR));

// undefined -> "undefined"
console.log(String(undefined));

// null -> "null"
let days = null;
console.log(String(days));

// boolean -> "true" or "false"
let isKind = true;
console.log(String(isKind));
console.log(isKind + ""); // 어떠한 자료형이든 +"" 해주면 문자열로 형변환됨


/* 데이터 → 숫자 ----------------------------------------------------------- */
// Number

// undeinfed -> "NaN"
console.log(Number(undefined));

// null -> 0
let money = null;
console.log(Number(money));

// boolean -> true: 1 / false: 0
let cutie = true;
console.log(Number(cutie));
console.log(cutie*1); // 어떠한 자료형이든 뒤에 *1 해주면 숫자로 형변환됨
console.log(cutie/1); // 나누기 1 도 동일

// string 숫자형 문자
let num = "     123";
console.log(num*1); // 공백까지 제거하고 숫자로 변환

// numeric string
let width = "320px";
console.log(typeof width); //string
// parseInt(string, 10) : 숫자값만 빼내기 (10진수를 생략해도 되지만 명시해주기)
console.log(parseInt(width, 10)); //320
console.log(typeof parseInt(width));
// parseFloat
let width_ = "        32.111111111111111111111111       px";
console.log(parseFloat(width_,10)); //32.111111111111114
console.log(parseFloat(width_));    //32.111111111111114
//뒤에 4가 찍히는 이유는 소수점 오류 : 64비트 부동소수점
console.log(typeof(parseFloat(width_,10))); //number


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(null));        //false
console.log(Boolean(NaN));         //false
console.log(Boolean(undefined));   //false
console.log(Boolean(0));           //false
console.log(Boolean(""));          //false
console.log(Boolean(" "));         //true
console.log(typeof " ");           //string
console.log(Boolean(!null));       //true
console.log(Boolean(!!null));      //false