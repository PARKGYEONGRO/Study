// js에서는 변수를 암시적 선언이 아닌 명시적 선언을 권장함
// var, let, const 키워드의 차이를 알아야함
// 변수, 변수, 상수
// var 키워드: js의 초창기 변수 선언 키워(지금은 권장 X)
// let 키워드는 변수의 중복 선언이 안 되고 변수 안의 데이터는 변경 가능함
// const 키워드는 let 키워드 처럼 변수 중복 선언이 안 되고 변수 안의 데이터 변경이 불가능함
// const 키워드는 변수가 아닌 변하지 않는 수 상수라고 불름

const num = 3;
console.log(num);


// 1. 변수의 이름은 카멜케이스 방식으로 작성
let userName = "PARKGYEONGRO";
console.log(userName);

// 2. 변수의 이름은 _, $, 문자로만 시작
let  _day = "월요일";
let  $day = "월요일";
let  day = "월요일";
console.log(_day);
console.log($day);
console.log(day);

// 3. 상수 const와 축약어는 대문자와 스네이크케이스 방식(ㄹ_ㄹ)으로 작성함
const HTML = "Hyper Text Markup Language"
const MAX_LEVEL = 99;
console.log(HTML);
console.log(MAX_LEVEL);

// 4. JS에 이미 있는 예약어(var, let, const, typeof 등등)는 사용할 수 없다.
// const var = 19;
