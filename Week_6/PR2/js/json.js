//JSON(JavaScript Object Notation)
//자바스크립트의 객체 표기법

import myData from "../myData.json";
//js파일은 생략가능 하지만 다른 파일은 명시를 해주어야 함

console.log(myData);

const user = {
  name: "H.E",
  age: 21,
  emails: ["hyeone@gmail.com", "she@naver.com"],
};
console.log("user", user);

const str = JSON.stringify(user);
//JSON으로 변경
console.log("str:", str);
console.log(typeof str); //string
//JSON이 하나의 문자데이터로 출력됨. 최대한 경량화되어야 하기 때문

const obj = JSON.parse(str);
//JSON으로 된 하나의 문자데이터를 JSON이라는 전역객체에
//메소드에 인수로 넣어 분석하여 활용할 수 있음
console.log("obj:", obj);
