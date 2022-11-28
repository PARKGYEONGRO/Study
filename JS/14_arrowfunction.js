// 복습 --------------------------------

// 함수 선언식: 단독으로 선언한 것
function sum1(num1, num2){
    return num1 + num2;
}
const sum_result1 = sum1(10, 20);
console.log(sum_result1)


// 함수 표현식: 변수에 함수를 할당한 것
const sum2 = function sum2(num3, num4){
    return num3 + num4;
}
const sum_result2 = sum2(10, 20);
console.log(sum_result2);
// -------------------------------------



// 화살표 함수: ES6에서 처음 등장한 새로운 함수 선언 방법
// 기존의 키워드와 식별자를 지우고 화살표(=>)를 사용함
// 함수를 식별할 수 있는 식별자가 없음 그렇기에 함수 표현식 방법으로 작성해야 호출 가능
// 화살표 함수를 사용하면 같은 return 내용의 함수이더라도 명령어의 길이를 줄일 수 있음

// const sum3 = (num5, num6) => {
//     return num5 + num6;
// }
// const sum_result3 = sum3(10, 30);
// console.log(sum_result3);

const sum3 = (num5, num6) => num5 + num6;
const sum_result3 = sum3(10, 30);
console.log(sum_result3);


// 10의 제곱 함수
const pow = x => x * x;
const pow_result1 = pow(10);
console.log(pow_result1)


// 주의할 점: return이라는 키워드를 제거할 경우 코드 자체에서 화살표 함수 옆에 중괄호로 인식할 수 있기 때문에 중괄호를 소괄호로 한 번 감싸줘야함
const getObject = () => ({
    name:"철수",
    age: 20
});
const obj1 = getObject();
console.log("이름:" + obj1.name, ", 나이:" + obj1.age);