import './utils/supportJavaScript.js';
// import './vanilla.script.js';
// import './react.script.js';

// console.log('React 개발 시작하기! 😊');


import { createElement as h, render } from './likeReact/index.js';

const app = h('div', {
  className: 'app'
}, h('h1', null, 'Hello Virtual DOM'));

render(app, document.getElementById('root'));

console.log(app);