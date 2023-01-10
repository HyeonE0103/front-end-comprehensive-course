//HTML 요소(Element) 1개 검색/찾기
const boxEl = document.querySelector(".box");
console.log(boxEl);

boxEl.addEventListener("click", function () {
  console.log("Click");
  boxEl.classList.add("active");
  console.log(boxEl.classList.contains("active"));
  boxEl.classList.remove("active");
  console.log(boxEl.classList.contains("active"));
});

// //HTML 요소에 적용할 수 있는 메소드
// boxEl.addEventListener();

// //인수(Arguments)를 추가 가능
// boxEl.addEventListener(1, 2);

// //1 - 이벤트(Event, 상황)
// //클릭을 하면 무언가를 하겠다
// boxEl.addEventListener("click", 2);

// //2 - 핸들러(Handler, 실행할 함수)
// boxEl.addEventListener("click", function () {
//   console.log("Click");
// });

//요소의 클래스 정보 객체 활용
//box라는 클래스를 가지고 있는 요소에 active라는 클래스를 추가
//boxEl에 classList라는 클래스정보를 가지고 있는 객체 내부에서
// active라는 클래스가 있는지에 대한 값을 isContains에 넣음
boxEl.classList.add("active");
let isContains = boxEl.classList.contains("active");
console.log(isContains);

//box와 active 클래스를 가지고 있는 요소에 active라는 클래스 제거
boxEl.classList.remove("active");
isContains = boxEl.classList.contains("active");
console.log(isContains);

//HTML 요소 모두 검색/찾기
const boxEls = document.querySelectorAll(".box");
console.log(boxEls);

//찾는 요소를 반복해서 함수 실행
//익명 함수를 인수로 추가
boxEls.forEach(function () {});

//첫 번째 매개변수(boxEl): 반복 중인 요소
//두 번째 매개변수(index): 반복 중인 번호
boxEls.forEach(function (boxEl, index) {});

//출력
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});