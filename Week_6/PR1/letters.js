// //JS 데이터
// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

const str = "0 123";
//문자데이터 0 123
console.log(str.length);
//5, 문자열 길이, 띄어쓰기도 공백으로 포함됨
const str2 = "Hello world";
const result = str2.indexOf("world");
//String.prototype.indexOf()
console.log(result);
//6, 만약 단어를 찾을 수 없다면 -1을 반환
console.log(str2.slice(0, 3));
//Hel, 문자열의 일부를 추출하여 새로운 문자열 반환
console.log(str2.replace("world", "H.E"));
//Hello H.E, 앞에 문자데이터를 뒤에 문자데이터로 변경해줌
console.log(str2.replace(" world", ""));
//Hello, replace을 이용하여 필요한 문자열만 남길 수 있음
const str3 = "hyeone@gmail.com";
console.log(str3.match(/.+(?=@)/)[0]);
//hyeon, 특정한 문자데이터에서 정규표현식을 통해서 특정한 문자를 match(일치)시켜서 배열데이터로 반환
const str4 = "  Hello world  ";
console.log(str4.trim());
//Hello wrold, 특정한 문자데이터에 앞뒤에 연결된 모든 공백 문자를 제거
