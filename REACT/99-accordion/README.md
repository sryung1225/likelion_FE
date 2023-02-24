학습한 React 개발 능력을 스스로 진단해보세요. 😃

## 요구 사항

- React, ReactDOM CDN을 사용합니다.
- JSX 사용은 선택 사항이며, JSX 사용 시 @babel/standalone을 활용합니다.
- 컴포넌트 타입은 class 또는 function 중 적절한 것을 사용합니다.
- 컴포넌트 props, state를 구분해 효율적으로 구현합니다.
- 컴포넌트 상태가 변경되면 UI가 업데이트 되어야 합니다.
- WAI-ARIA 기술 사양을 검토해 웹 접근성을 준수합니다. (참고: [vo.la/iO0MZR](https://vo.la/iO0MZR))
- HTML 코드를 React에서 렌더링하는 방법을 활용합니다. (참고: [vo.la/YSlH5f](https://vo.la/YSlH5f))
- 레벨 테스트의 `style.css` 파일을 분석해 컴포넌트 스타일을 적용합니다.

*** 
## UI 컴포넌트 제작

Accordion 컴포넌트를 구현합니다.

![https://user-images.githubusercontent.com/1850554/218873630-26ebabc1-6d86-4541-b37d-4d359cad0017.gif](https://user-images.githubusercontent.com/1850554/218873630-26ebabc1-6d86-4541-b37d-4d359cad0017.gif)

### 구현 요구사항

- [ ]  Accordion, AccordionHandle, AccordionPanel 컴포넌트를 작성합니다.
- [ ]  최초 모든 아코디언 아이템은 접힌 상태여야 합니다.
- [ ]  아코디언 핸들을 클릭하면 연결된 아코디언 패널이 펼쳐집니다.
- [ ]  아코디언 핸들 상태가 변경되면 아이콘 모양도 변경되어야 합니다.
- [ ]  다른 아코디언 핸들을 클릭하면 기존의 펼쳐진 아코디언 패널은 접힙니다.
- [ ]  이미 펼쳐진 아코디언 패널은 아코디언 핸들을 다시 클릭할 경우 접혀야 합니다.

### 상태

아코디언 컴포넌트는 아래 작성된 데이터를 props로 전달 받아 렌더링 합니다.

```jsx
[
  {
    id: 'accordion-a',
    handle: '넷플릭스란 무엇인가요?',
    panel: `
      <p>넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.</p>
      <p>저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.</p>
    `,
  },
  {
    id: 'accordion-b',
    handle: '아이들이 넷플릭스를 봐도 좋을까요?',
    panel: `
      <p>멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.</p>
      <p>키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.</p>
    `,
  },
]
```

### 아이콘

아코디언 컴포넌트에 사용되는 아이콘 코드를 활용합니다.

> chevronDown 아이콘 코드
> 

```xml
<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
  <path clipRule="evenodd" fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
</svg>
```

> chevronUp 아이콘 코드
> 

```xml
<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
  <path clipRule="evenodd" fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" />
</svg>
```

---

## 풀이

[React 레벨 테스트 - StackBlitz](https://stackblitz.com/edit/web-platform-ca4zqx?file=README.md)

[React 레벨 테스트 (풀이 😃) - StackBlitz](https://stackblitz.com/edit/web-platform-mf9yv5?file=script.js)