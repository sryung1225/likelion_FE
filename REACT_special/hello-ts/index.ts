/* -- Narrowing : 타입 좁혀가기 -- */
// const 함수 = (프로퍼티가_다른_객체: { a: number } | { b: number }) => {
//   if ('a' in 프로퍼티가_다른_객체) {
//     return 프로퍼티가_다른_객체.a
//   }

//   return 프로퍼티가_다른_객체.b
// }

// const 루트엘리먼트 = document.getElementById('root')
// if (루트엘리먼트) {
//   루트엘리먼트.innerHTML = '리엑트 렌더링!'
// }


/* -- Assertion : 타입 단정짓기 -- */
const 루트엘리먼트 = document.getElementById('root') as HTMLDivElement
루트엘리먼트.innerHTML = '리엑트 렌더링!'


/* -- 제네릭 : 로직 재활용 -- */
function 함수<실행할때_정해지는_타입>(파라미터: 실행할때_정해지는_타입) {
  alert(파라미터)
}

함수(1)
함수('1')
함수(true)