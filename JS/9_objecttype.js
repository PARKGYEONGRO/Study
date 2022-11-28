// let obj = {키(key):값(value)};
//           ____________________ = 속성(Property)라고 함

// 국어, 영어, 수학, 과학 점수
// 배열(array)는 무엇을 의미하는 값인지 알 수 없음
let student1 = [90, 70, 80, 60];

console.log(student1[0]); // 국어 점수
console.log(student1[1]); // 영어 점수
console.log(student1[2]); // 수학 점수
console.log(student1[3]); // 과학 점수

// 객체
// key를 문자열("", '')로 작성할 경우 띄어쓰기 및 공백을 할 수 있음
// 점 연산자로는 key에 공백이 있을 경우 사용 불가

let student2 = {
    // key : Value
    koreanScore:90,
    englishScore:70,
    mathScore:80,
    scienceScore:60
};

console.log(student2)

// 대괄호 연산자
console.log(student2["koreanScore"]);

// 점(닷, 마침표) 연산자
// *기억* 주의할 점: 대괄호 연산자처럼 문자열로 입력할 경우 오류 발생
console.log(student2.mathScore);