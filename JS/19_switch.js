// switch문 기본 문법
// *중요* break; 필수
// switch (key) {
//     case value1:
//         break;
//     case value2:
//         break;
//     case value3:
//         break;
//     default:
//         break;    
// }

let animal = 'Dog';

switch (animal) {
    case 'Cat':
        console.log('야옹');
        break;
    case 'Dog':
        console.log('멍멍');
        break;
    case 'Cow':
        console.log('음메');
        break;
    default:
        console.log('일치하는 동물 소리가 없습니다.');
        break;

}