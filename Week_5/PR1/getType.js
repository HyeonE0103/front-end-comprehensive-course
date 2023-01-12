export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

//export-내보내기
//getType이라는 js파일에서 getType이라는 함수를 파일 밖으로 내보냄