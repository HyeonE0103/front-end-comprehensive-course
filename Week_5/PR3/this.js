//this
//일반(Normal) 함수는 호출 위치에 따라 this 정의
//화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의
const he = {
  name: "H.E",
  normal: function () {
    //he라는 객체 내부에서 실행이 되어 호출위치(he.normal)에 he가 this가 되는것
    console.log(this.name);
  },
  arrow: () => {
    //호출위치와 전혀 상관없이 this가 선언될때 this를 알 수 있음
    //자신이 선언된 함수 범위에서 this를 정의하기 때문
    console.log(this.name);
  },
};
he.normal(); //H.E
he.arrow(); //undefined

const amy = {
  name: "Amy",
  normal: he.normal,
  //함수를 할당하고 있음. ()열려 실행되는 것X 즉 호출하는 개념이 아님
  //normal부분에 있는 그 데이터 여기서는 함수
  //이것이 곧 he의 normal이고 그 함수 자체가 다시 amy의 normal에 할당되는 것
  arrow: he.arrow,
};
amy.normal(); //Amy
amy.arrow(); //undefined

function User(name) {
  //User라는 이름의 생성자 함수
  this.name = name;
}
User.prototype.normal = function () {
  //User라는 함수 부분에 prototype을 이용해서 normal메소드 일반함수를 사용
  console.log(this.name);
};
User.prototype.arrow = () => {
  //User라는 함수 부분에 prototype을 이용해서 arrow메소드 화살표함수를 사용
  console.log(this.name);
};
const she = new User("She");
//new라는 키워드를 통해 생성자 함수를 She라는 인수와 함께 실행해서 she라는 인스턴스로 만들어줌
//new라는 키워드로 함수를 실행하면 즉 생성자 함수를 실행하면 그것이 곧 객체 데이터고 normal과 arrow를 호출할 수 있음
she.normal(); //She
she.arrow(); //undefined

const timer = {
  name: "H.E",
  timeout: function () {
    // setTimeout(function () {
    //   //2초 뒤에 log창을 띄움
    //   console.log(this.name); //undefined
    // }, 2000);
    setTimeout(() => {
      //2초 뒤에 log창을 띄움
      console.log(this.name); //H.E
    }, 2000);
  },
};
timer.timeout();
//timer함수를 사용할때는 콜백으로 일반함수보다는 화살표 함수를 쓰는 것이 더 활용도가 높음
//this가 setTimeout이라는 JS에 이미 정의되어 있는 함수에서 정의되는 것이 아니고
//자신이 작성한 특정한 범위에서 this가 정의될 수 있도록 만들어 줄 수 있기 때문
