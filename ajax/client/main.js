import { xhrData, insertLast, xhrPromise } from "./lib/index.js";

// xhrPromise
// .get("https://jsonplaceholder.typicode.com/users/1")
// .then((res) => {
//   insertLast("body", JSON.stringify(res));
// })
// .catch((err) => {
//   insertLast("body", "데이터 로딩에 실패했습니다.");
// });

// xhrData.get(
//   "https://jsonplaceholder.typicode.com/users",
//   (res) => {
//     insertLast("body", JSON.stringify(res));
//   },
//   (err) => {
//     insertLast("body", "데이터 로딩에 실패했습니다.");
//   }
// )