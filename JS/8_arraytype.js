// 하나의 변수에 여러개의 데이터(값)을 할당하고 싶다면 어떻게 해야할까?
// 그럴 때 사용하는 자료형이 배열(array)이다.

let arr0 = []; //이 상태로 출력하면 비어있는 값이 출력됨
console.log(arr0);

// 여러 개의 데이터를 할당하고 싶으면 콤마 , 를 사용하면 됨 index를 사용하여 원하는 값 출력 가능
let arr1 = [10];
let arr2 = [10, 20];
let arr3 = [10, "abc", true, null, undefined, function(){}, {}];

console.log(arr1);
console.log(arr2[1]);
console.log(arr3[3]);