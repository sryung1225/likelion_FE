/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

/* 변수 가지고 놀기 */
let admin;
let name;
name = "John";
admin = name;
console.log(admin);


/* 올바른 이름 선택하기 */
let ourPlanetName = "Earth";
let currentUserName = "ryung";


/* 대문자 상수 올바르게 사용하기 */
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);


/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */
// - 갯수 별 상품 가격 계산하기
let calcProductQuantity = 3000;
// - 구매 제품 가격의 총 합
let totalProductPrice = calcProductQuantity*5;
// - 1년 기준 일(day)자 수
const DAYS_PER_YEAR = 365;
// - 구매 결제 여부
let isPayment = false;
let hasClassName = false;
// - 구매 결제 내역
let paymentHistory;
// - 브랜드 접두사
const BRAND_PREFIX = "Apple";
// - 오늘의 운세
let fortuneOfToday;
// - 상품 정보
let productInformation = "iphone 13 mini";


/* variables ----------------------------------------------------------- */
/* constant variables -------------------------------------------------- */


// Redux 맛보기

// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패

const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';


/* -------------------------------------------------------------------------- */
/* Lexical Environment                                                        */
/* -------------------------------------------------------------------------- */

var nickName = "jjang";
let nickName2 = "jjang"; // Temporal Dead Zone (TDZ, 임시 사망 지역)