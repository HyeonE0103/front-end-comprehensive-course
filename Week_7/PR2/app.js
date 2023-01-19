function createDom(node) {
  //vdom은 전체를 뜻하니 node라는 변수명이 좋겠군
  //Dom을 만들려면 Dom api를 사용할 수 밖에 없음
  if (typeof node === "string") {
    //하위요소가 태그일땐 객체로 들어오는데 태그가 아니면 문자열로 들어옴
    return document.createTextNode(node);
    //문자열이면 Text컨텐츠로 넣어주기
  }
  const element = document.createElement(node.tag);
  //이렇게 만들어진 객체에 속성을 부여할려면 createElement가 반환한 객체를 이용해야해서 변수와 함께

  node.children.map(createDom).forEach(element.appendChild.bind(element));
  //children이 있는지를 순회해서 객체가 있는지를 보고 처리를 순회
  //재귀호출 패턴
  //부모 앨리먼트에 자식요소로 새로만든 dom앨리먼트들이 샥샥 추가됨

  return element;
}

const vdom = {
  //가상돔 멋쟁이 vdom
  tag: "p", //HTML구조 태그 이름,속성들, 자식요소
  props: {}, //속성, 여러개 가질 수 있으니깐 배열 or 객체
  //속성은 이름-값 쌍으로 되어있는데 배열은 이름을 가질 수 없기 때문에 객체로
  children: [
    //children안에는 또다른 태그가 들어가는 것이므로 구조는 똑같은 놈이 들어감
    {
      tag: "h1",
      props: {},
      children: ["React 만들기"], //text컨텐츠
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {},
          children: ["첫번째"], //text컨텐츠
        },
        {
          tag: "li",
          props: {},
          children: ["두번째"], //text컨텐츠
        },
        {
          tag: "li",
          props: {},
          children: ["세번째"], //text컨텐츠
        },
      ],
    },
  ],
};

document.querySelector("#root").appendChild(createDom(vdom));
//id가 root인 태그에 자식태그 추가
