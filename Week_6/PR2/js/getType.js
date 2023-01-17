export default function getType(data) {
  //export default 기본통로로 데이터가 빠져나갈 수 있는 구조
  //데이터에 따로 이름을 지정할 필요가 없음
  //즉 위에 이름인 getType을 지워도 정상적으로 잘 실행됨
  //기본통로는 하나의 데이터만 내보낼 수 있음
  return Object.prototype.toString.call(data).slice(8, -1);
}
