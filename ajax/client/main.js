import {
  xhrData,
  insertLast,
  xhrPromise,
  eve
} from "./lib/index.js";

// renderingUserList 함수 만들기
// ajax (eve) get user List

async function renderingUserList(){
  let response = await eve.get("https://jsonplaceholder.typicode.com/users");
	console.log(response.data); // ? (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
}
renderingUserList();