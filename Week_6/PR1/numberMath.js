//숫자데이터
const pi = 3.14159265358979;
console.log(pi);
const st = pi.toFixed(2);
//소수점에 몇번째 자리까지 유지할것인지를 명시. 문자데이터가 반환됨
console.log(st);
//3.14
console.log(typeof st);
//string
const integer = parseInt(st);
//분석되서 숫자만 추출되서 정수로 반환됨
const float = parseFloat(st);
//분석되서 숫자만 추출되서 실수로 반환됨
console.log(integer);
//3
console.log(float);
//3.14
console.log(typeof integer, typeof float);
//number number

//수학
console.log("abs:", Math.abs(-12));
//12, 절대값 반환
console.log("abs:", Math.min(2, 8));
//2, 인수로 들어온 숫자데이터들 중에 가장 작은 값을 반환
console.log("abs:", Math.max(2, 8));
//8, 인수로 들어온 숫자데이터들 중에 가장 큰 값을 반환
console.log("abs:", Math.ceil(3.14));
//4, 숫자데이터 올림 처리된 값을 반환
console.log("abs:", Math.floor(3.14));
//3, 숫자데이터 내림 처리된 값을 반환
console.log("abs:", Math.round(3.14));
//3, 숫자데이터 반올림 처리된 값을 반환
console.log("abs:", Math.random());
//0.9032879258817808, 랜덤숫자 반환(난수반환)
