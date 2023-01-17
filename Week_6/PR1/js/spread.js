//전개 연산자(Spread)
const fruits = ["Apple", "Banana", "Cherry", "Orange"];
console.log(fruits); //(3) ['Apple', 'Banana', 'Cherry']
console.log(...fruits); //Apple Banana Cherry
//문자데이터 형태로 출력됨
//...가 전개 연산자 기호

function toObject(a, b, ...c) {
  //여기서 c는 나머지 인수를 다 받음 rest parameter라고 불림
  return {
    //객체데이터 반환
    a: a, //a: a라는 매개변수
    b: b,
    c: c,
  };
}
const toObject2 = (a, b, ...c) => ({ a, b, c });
//함수부분을 축약형으로 작성. 위쪽과 똑같은 결과가 나옴

console.log(toObject(...fruits)); //c: (2) ['Cherry', 'Orange']
console.log(toObject2(...fruits));
console.log(toObject(fruits[0], fruits[1], fruits[2]));
//같은 결과가 나옴 하지만 불편
