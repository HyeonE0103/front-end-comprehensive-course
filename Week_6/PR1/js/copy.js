import _ from "lodash";

//얇은 복사(Shallow copy)와 깊은 복사(Deep copy)
const user = {
  //key: value
  name: "H.E",
  age: 21,
  emails: ["hyeone@gmail.com"],
  address: "Korea",
};
const copyUser = user;
console.log(copyUser === user); //true
//같은 메모리 주소를 바라보고 있음
const copyUser2 = Object.assign({}, user);
console.log(copyUser2 === user); //false
//다른 메모리 주소를 바라보고 있음
const copyUser3 = { ...user };  //얕은 복사
console.log(copyUser3 === user); //false
//새로운 객체에 값을 넣은것이기때문에 다른 메모리 주소를 바라보고 있음
const copyUser4 = _.cloneDeep(user); //깊은 복사
console.log(copyUser4 === user); //false

user.age = 22;
console.log("user", user); //age:22
console.log("copyUser", copyUser); //age:22
//같은 메모리 주소를 바라보고 있기 때문에 변경한 점이 따라 바뀜

user.emails.push("he@naver.com");
console.log(user.emails === copyUser3.emails);  //true
//emails은 배열, 배열도 참조형 데이터
//그렇기에 복사된게 아니고 그대로 같은 메모리 주소만 공유하는 것
console.log(user.emails === copyUser4.emails);  //false

//참조형 데이터를 복사할때 얕은복사로도 충분히 문제가 없다면 얕은복사를 이용하고
//참조형 데이터가 내부에 또다른 참조형 데이터를 가지고 있다면 깊은 복사를 통해서 복사를 하는 것이 안전