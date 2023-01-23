import { v4 as uuidV4 } from 'uuid';
//어떤 리스트, 컬랙션이 있을때 컬랙션에 유니크한 키 문자열 만들어줌

const store = { //stor객체 안에는 sectionList라는 배열이 들어있음
  sectionList: [],
};

const addSection = (title, est) => {  //새로운 논의주제 호출시(타이틀, 추정시간)
  store.sectionList.push({  //객체추가
    id: uuidV4(),
    title,
    est,
    act: 0,
    isDiscuss: false  //논의중인지 아닌지
  });
};

const startDiscuss = (id) => {
  store.sectionList
    .find(section => section.id === id)
    .isDiscuss = true;
};

const stopDiscuss = (id) => {
  store.sectionList
    .find(section => section.id === id)
    .isDiscuss = false;
};

const removeSection = (id) => {
  store.sectionList = store.sectionList.filter(section => section.id !== id);
};

const exportObject = {
  store,
  addSection,
  startDiscuss,
  stopDiscuss,
  removeSection,
};

export default exportObject;
