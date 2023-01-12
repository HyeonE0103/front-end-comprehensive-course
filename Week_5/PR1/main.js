import getType from "./getType"; //확장자는 생략할 수 있음
//import라는 키워드를 통해서 특정한 js내용을 가지고 올때 경로를 명확하게 명시해 놓지 않으면
//node_modules에서 찾게 됨. 그래서 정확한 경로를 명시해야함

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
