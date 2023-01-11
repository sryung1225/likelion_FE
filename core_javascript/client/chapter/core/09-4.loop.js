/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  hasOwnProperty: function (){
    return "헤헤";
  }
};

let key = 'standardName';
// console.log(key in javaScript); // ? true



// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// console.log(javaScript.hasOwnProperty(key)); // ? 헤헤
Object.prototype.nickName = "tiger";

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));
// ? true

let a = {}
for (let key in javaScript){
  // 그냥 for (let key in~) 까지 하면 조상에 있는거까지 가져오기 때문에
  // if 로 한번더 확인하는 것
  if({}.hasOwnProperty.call(javaScript, key)){
    console.log(key);
  }
}
// ? creator
// ? createAt
// ? standardName
// ? currentVersion
// ? hasOwnProperty



// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

let tens = [10, 100, 1000, 10000];

for(let value in tens){
  if(({}).hasOwnProperty.call(tens,value)){
    console.log(tens[value]);
  }
}
// ? 10
// ? 100
// ? 1000
// ? 10000