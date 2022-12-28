const els = document.querySelectorAll("div");
// 변수 els에 값을 할당하는데
// HTML구조에서(document) Selector를 통해서 모든요소를 찾을것이고(querySelectorAll)
// 찾으려고 하는 요소는 div("div")
els.forEach((el) => {
  console.log(el.dataset.fruitName);
});
// 찾은 요소인 els를 하나씩 반복하면서 데이터를 처리하고
// 변수 el에 els를 하나씩 담아서 내부에서 사용
// el에 담겨있는 dataset이라는 데이터를 추출하는 개념에서
// fruit-name으로 실제 데이터를 저장했지만 표기법에 따라 fruitName을
// console.log로 기록을 남김
