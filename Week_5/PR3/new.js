function User(first, last) {
  //함수이름을 파스칼 케이스로 적는 것은 그 함수가 new라는 키워드와 함께 생성자로써 사용된다는 것을 이름만으로 알수 있게함
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
//user라는 함수에 숨어져 있는 prototype이라는 속성부분에다가 getFullName을 할당해주면
//새롭게 몇개에 객체가 만들어져도 이 부분의 함수는 메모리에 한번만 만들어짐. 객체가 사용할때는 이 부분을 참조하는 것

const he = new user("SH", "L"); //new 키워드를 사용해 생성자 함수. 하나의 객체 데이터가 생성됨
const amy = new user("Amy", "Clarke");
const neo = new user("Neo", "Smith");
//{}, "", [] 등 특정한 기호를 가지고 데이터를 만드는 것을 리터럴 방식이라 함
//new라는 키워드를 통해서 생성자 함수로 실행한 결과를 반환해서 할당된 변수를 생성자 함수의 인스턴스라고 부름
//줄여서 인스턴스라고 부르는 것 위에 he, amy, neo가 인스턴스