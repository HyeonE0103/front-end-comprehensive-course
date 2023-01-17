import _ from "lodash";

const usersA = [
  { userId: "1", name: "H.E" },
  { userId: "2", name: "Lee" },
];
const usersB = [
  { userId: "1", name: "H.E" },
  { userId: "3", name: "Kim" },
];
const usersC = usersA.concat(usersB);
//concat을 사용하면 두개의 배열 데이터를 합쳐서 새로운 배열 데이터를 반환
console.log("concat", usersC);
console.log("uniqBy", _.uniqBy(usersC, "userId"));
//중복되어 있는 데이터에 중복되는 데이터 제거

const usersD = _.unionBy(usersA, usersB, "userId");
//합치면 중복이 발생할수 있는데이터를 합쳐서 중복을 제거한 후 새로운 배열 데이터로 반환
console.log("uniqBy", usersD);

const users = [
  { userId: "1", name: "H.E" },
  { userId: "2", name: "Lee" },
  { userId: "3", name: "Kim" },
  { userId: "4", name: "Park" },
  { userId: "5", name: "Umm" },
];
const foundUser = _.find(users, { name: "Lee" });
//특정한 객체 데이터를 찾음
const foundUserIndex = _.findIndex(users, { name: "Lee" });
////특정한 객체 데이터에 인덱스를 찾음
console.log(foundUser); //{userId: '2', name: 'Lee'}
console.log(foundUserIndex); //1

_.remove(users, { name: "H.E" });
//특정한 객체를 데이터에서 삭제함
console.log(users);