//데이터 불변성(Immutability)
//원시 데이터: String, Number, Boolean, undefined, null
//참조형 데이터: Object, Array, Function

let a = 1;
let b = 4;
console.log(a, b, a === b); //1 4 false
//메모리 주소가 다르기때문에 불일치
b = a;
console.log(a, b, a === b); //1 1 true
//b가 a의 주소를 바라보기 때문에 일치
a = 7;
console.log(a, b, a === b); //7 1 false
//a의 주소지가 바뀜. 그렇기에 a와 b 불일치
let c = 1;
console.log(b, c, b === c); //1 1 true
//c가 새로운 메모리에 할당되는 것이 아닌 기존에 메모리에 있는 주소
//즉 처음 a주소를 할당받아 b와 c가 일치

let d = { k: 1 };
let e = { k: 1 };
console.log(d, e, d === e); //{k: 1} {k: 1} false
//같은 값이지만 다른 메모리 주소를 사용 위에 원시데이터와 다른것을 확인 할 수 있음
//즉 새로운 값을 만들때마다 새로운 메모리 주소에 할당되는 구조를 가지고 있음
d.k = 7;
e = d;
console.log(d, e, d === e); //{k: 7} {k: 7} true
d.k = 2;
e = d;
console.log(d, e, d === e); //{k: 2} {k: 2} true
//같은 메모리 주소를 사용하기 때문에 e가 바뀌면서 d의 값도 바뀌는 것을 확인할 수 있음
let f = e;
console.log(d, e, f, d === f); //{k: 2} {k: 2} {k: 2} true
//f가 e의 주소가 할당되어 d,e,f가 모두 일치
f.k = 3;
console.log(d, e, f, d === f);  //{k: 3} {k: 3} {k: 3} true
//f의 k를 바꾸었지만 d,e,f가 다 바뀐것을 확인할 수 있음
