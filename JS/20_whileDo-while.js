// while문은 조건식이 거짓이 되는 경우 종료됨
// *중요* 조건식이 계속하여 참이면 while문이 종료되지 않음
// while(조건식){
//     // 반복코드
// }

let i=1;
while(i<10){
    console.log(i);
    i = i+1;
}

// do-while문
let flag = false;
do{
    console.log('do-while');
}
while(flag === true);
