/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;
let conversationTool = messenger;

text = "안녕?ㅋ";
// conversationTool.name = "line";

// 비교 (복사 vs. 참조)
console.log(message == text); // ? false
console.log(message === text); // ? false
console.log(messenger == conversationTool); // ? true
console.log(messenger === conversationTool); // ? true


// 객체 복사
// 1. for ~ in 문을 사용한 복사
const cloneObject = {}
for (const key in messenger){
  cloneObject[key] = messenger[key];
}
console.log(cloneObject);
console.log(cloneObject.name = "Line");
console.log(cloneObject);
console.log(messenger);
// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger);
console.log(copyObject);
// 3. 전개 연산자(...)를 사용한 복사
const spreadObject = {...messenger}; // 개꿀
console.log(spreadObject);
// 4. 객체를 복사해주는 유틸 함수
const copyObjectFun = object => Object.assign({}, object);
console.log(copyObjectFun(messenger));


// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
console.log(combinedCssMap);


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

let copyedContainerStyles = {...containerStyles};
console.log(copyedContainerStyles);
// 콘솔창에서 진행해보기
// copyedContainerStyles["max-width"].md = 999;
// copyedContainerStyles // ? md = 999
// containerStyles // ? md = 999


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

let copyedContainerStyles_deep = cloneDeep(containerStyles);
console.log(copyedContainerStyles_deep);
// 콘솔창에서 진행해보기
// copyedContainerStyles_deep["max-width"].md = 999;
// copyedContainerStyles_deep // ? md = 999
// containerStyles // ? md = 640


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js