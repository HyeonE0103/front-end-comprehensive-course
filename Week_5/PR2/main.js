// 함수 복습
function sum(x, y) {
  // console.log(x + y);
  return x + y;
}

sum(1, 3);
console.log(sum(1, 3));

//화살표 함수
//() => {}  vs function(){}
const double = function (x) {
  return x * 2;
};
console.log("double:", double(7));

const doubleArrow = (x) => {
  return x * 2;
};
console.log("doubleArrow:", doubleArrow(7));

const doubleArrow2 = (x) => x * 2;
console.log("doubleArrow2:", doubleArrow2(7));

const myName = (x) => ({ name: "H.E" });
console.log("myName:", myName());

//즉시 실행함수. IIFE
const a = 7;
function double2() {
  console.log(a * 2);
}
double2();

(function () {
  console.log(a * 2);
})();

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
double3();

// const double3 = function () { 오류
//   console.log("double3:", a * 2);
// };

function double3() {
  console.log("double3:", a * 2);
}

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(함수, 시간): 설정된 Timeout 함수를 종료
// clearInterval(함수, 시간): 설정된 Interval 함수를 종료
const timer = setTimeout(() => {
  console.log("3초뒤 log발생");
}, 3000); //3초 뒤
const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  clearTimeout(timer);
});

const timer2 = setInterval(() => {
  console.log("3초마다 log발생");
}, 3000); //3초 뒤
const h1El2 = document.querySelector("h2");
h1El2.addEventListener("click", () => {
  clearInterval(timer2);
});

// 콜백(Callback)
// 함수의 인수로 사용되는 함수
function timeout() {
  setTimeout(() => {
    console.log("Hi!");
  }, 3000);
}
timeout();
console.log("Done!");

function timeout2(cb) {
  setTimeout(() => {
    console.log("Hi!");
    cb();
  }, 3000);
}
timeout2(() => {
  console.log("Done!");
});
