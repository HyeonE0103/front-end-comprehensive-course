//데이터 타입 확인
import getType from "./getType"; //확장자는 생략할 수 있음
import random from "./getRandom";
// //import라는 키워드를 통해서 특정한 js내용을 가지고 올때 경로를 명확하게 명시해 놓지 않으면
// //node_modules에서 찾게 됨. 그래서 정확한 경로를 명시해야함

console.log(typeof "Hi");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));

//산술연산자
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

//할당 연산자
const a = 2;
let b = 2;
b = b + 1;
b += 1; //b = b + 1

//비교 연산자
const c = 1;
const d = 1;
const e = 2;
console.log(c === d); //true
console.log(c !== d); //false
console.log(c < e); //true
console.log(c > e); //false

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(1, "1"));

//논리 연산자
const f = 1 === 1;
const g = "AB" === "AB";
const h = false;

console.log(f); //true
console.log(g); //true
console.log(h); //true

console.log("&&: ", f && g && h); //false, and연산자는 모두 true여야 함
console.log("||: ", f || g || h); //true, 하나만 true여도 됨

//삼항 연산자
const i = 1 < 2;

if (a) {
  console.log("참"); //참
} else {
  console.log("거짓");
}

console.log(a ? "참" : "거짓"); //참

//조건문 If Else
const j = random(); //j는 랜덤수

if (j === 0) {
  console.log("j는 0");
} else if (j === 1) {
  console.log("j는 1");
} else {
  console.log("j는 0도 1도 아님");
}

//조건문 Switch
switch (j) {
  case 0:
    console.log("j는 0");
    break;
  case 1:
    console.log("j는 1");
    break;
  default:
    console.log("j는 0도 1도 아님");
}

//반복문 For
//for (시작조건; 종료조건; 변화조건){}
const ulEl = document.querySelector("ul");

for (let i = 0; i < 5; i += 1) {
  const li = document.createElement("li"); //li태그 만들기
  li.textContent = `list-${i + 1}`; //li태그의 내용은 list - 변수(i() + 1
  if ((i + 1) % 2) {
    //0은 false, 1은 true
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li); //ulEl 자식으로 li 태그 추가하기
}

//변수 유효범위
//var, let, const
function scope() {
  if (true) {
    const a = 123;
    console.log(a);
  }
}

scope();

//형변환

//Truthy(참 같은 값)
//true, {}, [], 1, 2, 'false', -12, '3.14' ...

//Falsy(거짓 같은 값)
//false, '', null, undefined, 0, -0, NaN

const k = 1;
const l = "1";
console.log(k == l);  //===와 다르게 형변환을 시켜 내용이 같으면 true

