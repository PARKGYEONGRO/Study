// return 키워드: 함수 안에서만 사용가능함

function sum(num1, num2){
    return num1 + num2;
}
const result_sum1 = sum(10, 20);
console.log(result_sum1)


function printReturn(){
    console.log('return 실행 전');
    return;
    console.log('return 실행 후');
}
printReturn();