const user = {
  name: "H.E",
  age: 21,
  emails: ["hyeone@gmail.com", "she@naver.com"],
};

//localStorage.setItem("user", user); key:user, Value:[object Object]
//원하는 내용이 제대로 저장되지 않음
//localStorage라는 전역객체에 데이터를 저장하겠다는 setItem메소드 사용

localStorage.setItem("user", JSON.stringify(user));
//원하는 내용이 제대로 저장됨을 확인할 수 있음

console.log(localStorage.getItem("user"));
//localStorage에서 데이터를 가져올때는 getItem메소드 실행
//{"name":"H.E","age":21,"emails":["hyeone@gmail.com","she@naver.com"]}
//문자데이터로 출력됨

console.log(JSON.parse(localStorage.getItem("user")));
//localStorage에 저장되어 있는 데이터가 getItem으로 가지고와져서
//JSON객체에 parse메소드로 분석되서 실제 JS데이터로 출력됨

const str = localStorage.getItem("user");
const obj = JSON.parse(str);
obj.age = 22;
localStorage.setItem("user", JSON.stringify(obj));
//로컬데이터에 있는 데이터 수정
//데이터를 가지고 와서 코드내에서 수정을 한다음 다시 해당하는 키의 이름으로 덮어쓰기

localStorage.removeItem("user");
//removeItem을 이용하여 데이터를 지움