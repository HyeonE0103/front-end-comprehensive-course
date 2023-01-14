class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}
const myVehicle = new Vehicle("운송수단", 2);
console.log(myVehicle);
class Bicycle extends Vehicle {
  //extends 확장(상속)을 의미
  //여기서는 운송수단(Vehicle)에 대한 정보를 Bicycle이라는 새로운 클래스로 확장, 상속해서 사용하겠다는 뜻
  constructor(name, wheel) {
    super(name, wheel);
    //extends 뒤에 확장된 클래스, 즉 여기서 Vehicle이 super이 있는 자리에서 실행됨
  }
}
const myBicycle = new Bicycle("자전거", 3);
console.log(myBicycle);
class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license; //새로운 로직 추가(확장)
  }
}
const myCar = new Car("벤츠", 4, "true");
console.log(myCar);
