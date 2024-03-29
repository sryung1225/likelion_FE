/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray

const arr = [10,100,1000,10000]
Array.isArray([])

function isArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}

function isNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}


/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {}

arr.forEach(function(item,index){
  // user[0] = 10
  this[index] = item
},user)


const span = document.querySelectorAll('span');
span.forEach((item,index)=>{
  item.addEventListener('click',(e)=>{
    console.log(e.target.style.background = 'orange');
    console.log(index);
  })
})


/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse()
// console.log(arr);
// splice
//        시작 제거 [추가]
arr.splice(1,0,23,5)
// console.log(arr);
// sort


// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.

arr.sort((a,b)=>{
  return a - b
})

console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let nickName = 'tiger';
`안녕 나는 ${nickName} 이야`

let todo = ['밥먹기','미용실가기','코딩공부하기'];


let template = todo.map((todoList)=>{
  return /* html */ `<li>${todoList}</li>`
  // return /* html */ '<li>'+ todoList +' </li>'
})

template.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item)
})


// console.log(template);

let newArray = arr.map( item => item * 2 )
// console.log(newArray);


/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf

// console.log( arr.indexOf(999) );

// lastIndexOf

// includes
// console.log( arr.includes(99) );

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'샤샤'},
  {id:2,name:'쎄너'},
  {id:3,name:'춘기'},
]
// find

const find = users.find((item,index)=>{
  return item.id < 5
})

// console.log(find)

// findIndex
const findIndex = users.findIndex((item)=>{
  return item.id === 3
})

console.log(findIndex);
/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

let result = arr.filter((number)=>{
  return number < 100
})

console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */


const friends = [
  {
    name: '캐스퍼',
    age: 3,
    job: '쾌네글자',
  },
  {
    name: '쿡희',
    age: 20,
    job: '국희모',
  },
  {
    name: '야호',
    age: 15,
    job: '야바위호빵',
  }
];


// reduce

// 친구들 나이의 총 합을 구하세요.
let age = friends.reduce((acc,cur)=>{
  return acc + cur.age
})


let template2 = todo.reduce((acc,cur,index)=>{
  return /* html */ acc + `<li>할일 ${index + 1} : ${cur}</li>`
},'')

console.log(template2); // ? <li>할일 1 : 밥먹기</li><li>할일 2 : 미용실가기</li><li>할일 3 : 코딩공부하기</li>
console.log(age);

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '금동 뷘 믓째이 산적';

// split :  문자  →  배열 
let nameArray = str.split(' ');
console.log(nameArray); // ? (4) ['금동', '뷘', '믓째이', '산적']


// join : 배열 → 문자
console.log( nameArray.join(' / ') ); // ? 금동 / 뷘 / 믓째이 / 산적