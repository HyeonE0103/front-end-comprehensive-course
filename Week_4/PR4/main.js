//함수 선언
function helloFunc() {
  //실행코드
  console.log(123);
  return 7;
}
//함수 호출
helloFunc(); //123

function returnFunc() {
  return 123;
}
let num = returnFunc();
console.log(num);

//함수 선언
function sum(a, b) {
  //adhk b는 매개변수(Parameters)
  return a + b;
}
//재사용
let a = sum(1, 2); //1과 2는 인수(Arguments)
let b = sum(7, 12);
console.log(a, b); //3 19

//기명(이름이 있는 함수)
//함수 선언
function hello() {
  console.log("Hello");
}
//익명(이름이 없는) 함수
//함수 표현
let world = function () {
  console.log("World");
};
//함수 호출
hello(); //Hello
world(); //World

//객체 데이터
const her = {
  name: "H.E",
  age: 20,
  //메소드(Method)
  getName: function () {
    return this.name;
  },
};
const herName = her.getName();
console.log(herName); //H.E
//혹은
console.log(her.getName()); //H.E
