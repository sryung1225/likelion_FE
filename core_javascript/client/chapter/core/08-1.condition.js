/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let num = prompt("숫자를 입력하세요");
// if (num > 0){
//   alert("양수");
// } else if (num < 0) {
//   alert("음수");
// } else if (num == 0) {
//   alert("0이네요")
// }
// num > 0 ? alert("양수") : (num == 0 ? alert("0이네요") : alert("음수"));


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

let didWatchMovie = true;
let goingToWatchMovie = true;

if(!didWatchMovie){
  if(goingToWatchMovie){
    console.log("I will see later");
  } else {
    console.log("Not interested");
  }
} else {
  console.log("It's so exciting");
}

// 조건부 연산자
didWatchMovie = "yes";
goingToWatchMovie = "yes";
let ment = "";
ment = didWatchMovie.includes("yes") ? "봤다" : goingToWatchMovie === "yes" ? "곧볼거임" : "관심없음";
console.log(ment);

// 멀티 조건부 연산자 식