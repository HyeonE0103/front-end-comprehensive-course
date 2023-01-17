//구조 분해 할당(Destructuring assignment)
//비구조화 할당
const user = {
  //key: value
  name: "H.E",
  age: 21,
  email: "hyeone@gmail.com",
  address: "Korea",
};
const { name, age, email: em, address = "USA" } = user;
//ex) user.address
//객체 데이터를 구조분해해서 각각의 변수로 만들어서 활용 할 수 있음
//비어있다면 할당연산자를 이용해 지정해 줄 수 있음. address = "USA"
console.log(`이름: ${name}`); //이름: H.E
console.log(`${name} 나이: ${age}`); //H.E 나이: 21
console.log(`${name} 이메일 주소: ${em}`);
//H.E 이메일 주소: hyeone@gmail.com. email이라 쓰면 오류
console.log(address);
//Korea

const fruits = ["Apple", "Banana", "Cherry"];
const [, b, c, d] = fruits;
//Apple은 추출X
console.log(b, c, d); //Banana Cherry undefined
