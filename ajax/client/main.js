/* global gsap */

import {
  insertLast,
  eve,
  getNode as $,
  renderUserCard,
  changeColor,
  delayP,
  renderSpinner,
  renderEmptyCard,
  getNodes,
  attr
} from "./lib/index.js";

// renderingUserList 함수 만들기
// ajax (eve) get user List

// 유저 카드 생성
// 생성된 카드로 렌더링

// 1. userList.js 로 간다
// 2. renderUserCard 함수를 만들기
// 3. 만들어진 함수 안에 createUserCard 를 던지고,
// 4. renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록

const userCardContainer = $(".user-card-inner");

async function renderingUserList(){

  renderSpinner(userCardContainer); // 로딩스피너 렌더링

  try {
    await delayP(2000); // 2초동안 대기....
    $(".loadingSpinner").remove(); // 대기 이후 로딩스피너 안보이게

    let response = await eve.get("https://jsonplaceholder.typicode.com/users");

    let userData = response.data;
    // console.log(userData); // ? (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

    userData.forEach(data => renderUserCard(userCardContainer, data));

    changeColor(".user-card");

    // console.log(gsap.utils.toArray(".user-card")); // ? (10) [article.user-card, article.user-card, ... ]
    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch(err){
    renderEmptyCard(userCardContainer);
  }
}
renderingUserList();

// 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요.
function handler(e){
  let deleteBtn = e.target.closest("button");
  let article = e.target.closest("article");

  if(!deleteBtn || !article) return;

  let id = attr(article, "data-index").slice(5);
  eve.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
}
userCardContainer.addEventListener("click", handler);