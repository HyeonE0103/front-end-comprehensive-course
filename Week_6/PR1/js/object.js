//객체
//참조형, 메모리의 주소만 참조해서 사용
const userAge = {
  //key: value
  name: "H.E",
  age: 21,
};
const userEmail = {
  name: "H.E",
  email: "hyeone@gmail.com",
};
const target = Object.assign(userAge, userEmail);
//Object라는 전체영역에서 사용할 수 있는 전역객체 사용, assign은 실제 데이터객체 사용X(정적메소드)
console.log(target);
console.log(userAge); //원본객체에 userEmail이 합쳐졌음
console.log(target === userAge); //true
//같은 메모리를 바라보고 있기 때문에 true반환
const target2 = Object.assign({}, userAge, userEmail);
//Object라는 전체영역에서 사용할 수 있는 전역객체 사용, assign은 실제 데이터객체 사용X(정적메소드)
//userAge는 첫번째 인수자리에 있지 않기 때문에 대상객체가 아니고 target2라니 새로운 객체가 만들어짐
console.log(target2);
console.log(target2 === userAge); //false
const a = { k: 123 };
const b = { k: 123 };
console.log(a === b); //false
//생긴것은 똑같으나 다른 객체

const user = {
  name: "H.E",
  age: 21,
  email: "hyeon@gmail.com",
};
const keys = Object.keys(user);
//Object.keys에 정적메소드를 통해서 키들만 추출되어 새로운 배열 데이터 생성
console.log(keys); //['name', 'age', 'email']
console.log(user["email"]); //hyeon@gmail.com
console.log(user.email); //hyeon@gmail.com
const values = keys.map((key) => user[key]);
//배열 map 메소드를 사용해 각 value를 모아 values라는 새로운 배열 생성
//user[key]를 user.key로 하면 undefined이 뜸
console.log(values); //['H.E', 21, 'hyeon@gmail.com']