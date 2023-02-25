let 이름: string // 문자열로 자료타입 지정
// 이름 = 0 // 에러!
이름 = '0' // => 이름 = '0';

let 랄라: string | number // 문자열 또는 숫자
랄라 = '1'

type 유저타입 = { 아이디: string, 아바타: string }
let 유저: 유저타입
// 유저 = '' // 에러!

type 사람타입 = { 이름: string }
type 유저타입2 = { 아이디: string, 아바타: string }

let 유저2: 사람타입 & 유저타입2
// 유저2 = {
//   아이디: '1',
//   아바타: '2'
// } // 에러!

interface 사람타입2 {
  이름: string
}

interface 유저타입3 extends 사람타입2 {
  아이디: string,
  아바타: string
}

let 유저3: 유저타입3
// 유저3 = {
//   아이디: '1',
//   아바타: '2'
// } // 에러!