//배열 데이터
const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Cherry"];

const a = numbers.map((number) => {
  return number < 3;
});
console.log(a); //(4) [true, true, false, false]

const b = numbers.filter((number) => {
  return number < 3;
});
console.log(b); //(2) [1, 2]
//배열데이터에 들어있는 각각의 item들을 특정한 기준에 의해서 필터링을 해 새로운 배열로 반환
const c = numbers.filter((number) => number < 3);
//return 부분 {}괄호 생략

const d = fruits.find((fruit) => {
  return /^B/.test(fruit);
});
console.log(d); //Banana
//데이터를 찾아 반환

const e = fruits.findIndex((fruit) => /^B/.test(fruit));
console.log(e); //1
//데이터를 찾고 인덱스 번호를 반환

const f = numbers.includes(3);
console.log(f); //true
//배열데이터에 인수로 사용된 특정한 데이터가 포함이 되어져 있는지를 확인해줌

//.push(), .unshift(), .reverse(), 원본 수정됨 주의!!
numbers.push(5);
console.log(numbers); //(5) [1, 2, 3, 4, 5]
//배열에 가장 뒤쪽에 인수의 내용을 밀어넣음
numbers.unshift(0);
console.log(numbers); //(6) [0, 1, 2, 3, 4, 5]
//배열에 가장 앞쪽에 인수의 내용을 밀어넣음
numbers.reverse();
console.log(numbers);
//배열을 거꾸로 뒤집어버림
numbers.splice(2, 1);
console.log(numbers); //(5) [5, 4, 2, 1, 0]
//지정된 인덱스 위치(인수1)에 원하는 개수(인수2)만큼 인덱스를 지움
numbers.splice(2, 0, 99);
console.log(numbers); //(6) [5, 4, 99, 2, 1, 0]
//지정된 인덱스 위치(인수1)에 인수3을 넣음
