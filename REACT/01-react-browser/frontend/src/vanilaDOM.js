// 아래 마크업을 JavaScript + DOM API를 사용해 동적으로 렌더링 합니다.
// DOM API : 동적으로 마크업 (React가 하는 일)
// - ❌ innerHTML, insertAdjacentHTML 사용 금지
// - ⭕ document.createElement API

// DOM API 예시
// getELemetById, querySelector, querySelectorALl
// addEventListener, classList, setAttribute, dataset, ...

const rootElement = document.getElementById('root');


// ❌ 예시
function renderVanilaApp() {
  rootElement.innerHTML = /* html */ `
    <div class="container container--md">
      <h1>웹브라우저 환경에서 React 라이브러리 시작하기</h1>
      <p>React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.</p>
      <ul>
        <li>React 및 ReactDOM API 활용</li>
        <li>가상(Virtual) 노드 vs. 실제(Actual) DOM 노드</li>
      </ul>
    </div>
  `;
}

// ⭕
function render() {
  // <div class="container container--md"></div>
  const container = document.createElement('div');
  container.classList.add('container', 'container--md');

  // <h1></h1>
  // const containerTextContent = document.createTextNode('웹브라우저 환경에서 React 라이브러리 시작하기');
  // containerHeadline.append(containerTextContent);
  const containerHeadline = document.createElement('h1');
  containerHeadline.textContent = '웹브라우저 환경에서 React 라이브러리 시작하기';

  // <p></p>
  const containerDescription = document.createElement('p');
  containerDescription.textContent = 'React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.';

  // data -> rendering
  // <ul><li></li></ul>
  const learningSubjects = [
    'React 및 ReactDOM API 활용',
    '가상(Virtual) 노트 vs. 실제(Actual) DOM 노드'
  ];

  const subjectList = document.createElement('ul');
  // loop (for문, forEach or map 메서드)
  learningSubjects.forEach(subject => {
    const listItem = document.createElement('li');
    listItem.textContent = subject;
    // console.log(listItem);
    subjectList.append(listItem);
  });

  // DOM에 그려넣기
  container.append(containerHeadline);
  container.append(containerDescription);
  container.append(subjectList);
  rootElement.append(container);
}

render();