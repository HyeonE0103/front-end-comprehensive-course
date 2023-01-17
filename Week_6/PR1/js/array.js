//배열 데이터
const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Cherry"];
//0번째 1번째 ... 하는 이 숫자를 '인덱스'라고 부름
//배열데이터 내부에 들어있는 각각의 데이터들을 element(요소)라고 함
//item이라고 할 수도 있음
console.log("numbers[1]:", numbers[1]);
//제로베이스
//배열데이터에서 대괄호를 열고 인덱스 숫자를 넣어서 조회하는 것을 '인덱싱'이라고 함

console.log("numbers:", numbers.length); //4
console.log([1, 2].length); //2
console.log([].length); //0

console.log(numbers.concat(fruits));
//(7) [1, 2, 3, 4, 'Apple', 'Banana', 'Cherry']
//합쳐진 새로운 배열 생성, 원본 배열에는 영향이 없음

fruits.forEach(function (element, index, array) {
  console.log(element, index, array);
});
//아이템 개수 만큼 인수로 사용된 콜백함수가 반복적으로 실행됨
//첫번째 실행으로 Apple이 두번째에 Banana가 세번째 Cherry가 element로 들어옴
//실행될때 마다 두번째 매개변수인 index 값이 0부터 시작해서 하나씩 증가함
//array는 콜백에 해당하는 forEach라는 메소드가 붙어있는 그 배열(여기서는 fruits)데이터 지칭
//array는 필수요소X
fruits.forEach(function (fruit, i) {
  console.log(fruit, i);
});

const array = [5, 12, 8, 130, 44];
const found = array.find((element) => element > 10);
//화살표 함수 매개변수가 하나면 ()소괄호 생략 가능 (element => element > 10)
//또한 간단한 실행문을 반환하는 경우에는 중괄호랑 return 키워드를 생략할 수 있음
//콜백함수를 이용하여 반복
console.log(found);
//12

const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`);
});
console.log(a);
//forEach가 실행되고 반환되는 값이 없어서 undefined가 반환됨
const b = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`);
}); //화살표 함수 사용

const c = fruits.map(function (fruit, index) {
  // return `${fruit}-${index}`;
  return {
    id: index,
    name: fruit,
  };
});
//인덱스가 총 3개니, 콜백함수가 총 3번 실행됨
//map 메소드는 인수로 사용하는 콜백에 내부에서 반환하는 하나의 데이터를 가지고
//데이터들을 모아놓은 새로운 배열을 만들어서 반환해줌
console.log(c);
const d = fruits.map((fruit, index) => ({
  id: index,
  name: fruit,
})); //화살표 함수 사용
//반환할려는 데이터가 객체데이터기 때문에 그대로 생략가능 X
//소괄호로 묶어서 중괄호를 열어주어야 객체데이터가 화살표함수 문법에 의해 반환됨
