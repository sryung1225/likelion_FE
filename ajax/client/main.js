/* global gsap */

import {
  xhrData,
  insertLast,
  xhrPromise,
  eve,
  getNode,
  renderUserCard,
  changeColor
} from "./lib/index.js";

// renderingUserList 함수 만들기
// ajax (eve) get user List

// 유저 카드 생성
// 생성된 카드로 렌더링

// 1. userList.js 로 간다
// 2. renderUserCard 함수를 만들기
// 3. 만들어진 함수 안에 createUserCard 를 던지고,
// 4. renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록

const userCardContainer = getNode(".user-card-inner");

async function renderingUserList(){
  let response = await eve.get("https://jsonplaceholder.typicode.com/users");

  let userData = response.data;
  // console.log(userData); // ? (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

  userData.forEach(data => renderUserCard(userCardContainer, data));

  changeColor(".user-card");
  
  // console.log(gsap.utils.toArray(".user-card")); // ? (10) [article.user-card, article.user-card, ... ]
  gsap.to(gsap.utils.toArray(".user-card"), {
    x: 100,
    rotation: 360,
    duration: 3,
    // stagger: 0.3,
    stagger: {
      each: 0.1,
      from: "edge"
    },
  });
}
renderingUserList();