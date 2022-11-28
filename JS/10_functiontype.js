// function: 연관된 코드들을 모아놓은 자료형
// JS에서 함수를 실행하는 것은 "함수를 호출한다" 라고 함
// 변수에 할당 가능

// 함수 선언식
function Myname1(){
    console.log("Hello My name is PARKGYEONGRO")
    console.log("Hello My name is PARKGYEONGRO")
    console.log("Hello My name is PARKGYEONGRO")
};

Myname1();

// 함수 표현식
// 변수의 이름으로 함수를 호출할 수 있음
const Myname2 = function Myname1(){
    console.log("Hello My name is PARKGYEONGRO")
    console.log("Hello My name is PARKGYEONGRO")
    console.log("Hello My name is PARKGYEONGRO")
};

Myname2();

// 익명 함수
const Myname3 = function(){
    console.log("Hello My name is PARKGYEONGRO")
    console.log("Hello My name is PARKGYEONGRO")
    console.log("Hello My name is PARKGYEONGRO")
};

Myname3();