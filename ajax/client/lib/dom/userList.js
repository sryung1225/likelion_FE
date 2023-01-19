
import { insertLast } from './insert.js';

const createUserCard = ({
  id = "",
  name = "",
  email = "",
  website:site = ""
} = {}) => {
  return /* html */ `
    <article class="user-card" data-index="user-${id}">
      <h3 class="user-name">${name}</h3>
      <div class="user-resouce-info">
        <div>
          <a class="user-email" href="mailto:${email}">${email}</a>
        </div>
        <div>
          <a class="user-website" href="https://${site}" target="_blank" rel="noopener noreferer">${site}</a>
        </div>
      </div>
      <button class="delete">삭제</button>
    </article>
  `
}
// console.log(createUserCard(
//   {
//     id: 1,
//     name: "sryung",
//     email: "sryung@gmail.com",
//     website: "github.com/sryung1225"
//   }));

export const renderUserCard = (target, data) => {
  insertLast(target, createUserCard(data));
}