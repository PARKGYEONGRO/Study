// ES6 템플릿 문자열

// I'm Fine Thank You!
// "시작이 반이다"
// "여러분, '시작이 반이다.'라는 말 들어보셨죠?"


// 기존
// let str1 = "I'm Fine Thank You!";
// let str2 = '"시작이 반이다"';
// let str3 = "\"여러분, '시작이 반이다.'라는 말 들어보셨죠?\"";

// console.log(str1);
// console.log(str2);
// console.log(str3);

// ES6 템플릿 문자열 1 (ESC 버튼 밑: ` )
let str1 = `I'm Fine Thank You!`;
let str2 = `"시작이 반이다"`;
let str3 = `"여러분, '시작이 반이다.'라는 말 들어보셨죠?"`;

console.log(str1);
console.log(str2);
console.log(str3);


// ES6 템플릿 문자열 2
let name1 = '철수';
let name2 = '영희';

let string = `${name1}은 ${name2}를 좋아합니다.`;
console.log(string);


