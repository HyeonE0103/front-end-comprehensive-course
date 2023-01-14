//ES6 Classes

const he = {
  name: "H.E",
  normal() {
    //normal:function()이지만 :function 생량가능
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
he.normal();
he.arrow();

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
class User {
  constructor(first, last) {
    //하나의 함수라고 보면 됨
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    //별도로 prototype 속성을 중간에서 사용하지 않아도 바로 prototype으로 만들어지는 메소드 정의
    return `${this.firstName} ${this.lastName}`;
  }
}
const she = new User("SH", "L");
const neo = new User("Neo", "Smith");

console.log(she.getFullName()); //SH L
