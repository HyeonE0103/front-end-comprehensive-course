import { createDom, render } from "./react";

const vdom = {
  //가상돔 멋쟁이 vdom
  tag: "p", //HTML구조 태그 이름,속성들, 자식요소
  props: {}, //속성, 여러개 가질 수 있으니깐 배열 or 객체
  //속성은 이름-값 쌍으로 되어있는데 배열은 이름을 가질 수 없기 때문에 객체로
  children: [
    //children안에는 또다른 태그가 들어가는 것이므로 구조는 똑같은 놈이 들어감
    {
      tag: "h1",
      props: {
        style: "color:red",
      },
      children: ["React 만들기"], //text컨텐츠
    },
    {
      tag: "ul",
      props: { style: "color:orange" },
      children: [
        {
          tag: "li",
          props: {},
          children: ["첫번째"], //text컨텐츠
        },
        {
          tag: "li",
          props: { style: "color:green" },
          children: ["두번째"], //text컨텐츠
        },
        {
          tag: "li",
          props: { style: "color:blue" },
          children: ["세번째"], //text컨텐츠
        },
      ],
    },
  ],
};

render(vdom, document.querySelector("#root"));
//id가 root인 태그에 자식태그 추가
