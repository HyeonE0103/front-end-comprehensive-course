import { createEl, render, Component } from "./react";
//이 js파일에서 createEl을 사용하지 않더라도 실제 실행은 트랜스파일링된 bundle파일이
//실행이 되고 createEl이 사용되므로 createEl을 포함시켜주어야 함
/* @jsx createEl*/
const vdom = {
  //가상돔 멋쟁이 vdom
  //내용이 많아지면 복잡하고 번잡스러워짐 -> 개선요소
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
//render(vdom, document.querySelector("#root"));
//id가 root인 태그에 자식태그 추가

const vdom2 = createEl(
  //함수호출방법 사용
  "p",
  {},
  createEl("h1", {}, "react 만들기"),
  createEl(
    "ul",
    {},
    createEl("li", { style: "color:purple" }, "첫번째 아이템"),
    createEl("li", { style: "color:pink" }, "두번째 아이템"),
    createEl("li", { style: "color:hotpink" }, "세번째 아이템")
  )
);
// render(vdom2, document.querySelector("#root"));

const vdom3 = (
  //마크업과 같은 구조 이용
  //실행안됨 Babel로 돌려보면 밑에것을 babel이 위에 함수호출방식으로 바꿔줌
  //그래서 /* @jsx createEl*/을 사용해 명시해줌
  //하지만 인자가 없는 경우 null로 넘겨주어 아직 오류가 남
  <p>
    <h1>React 만들기</h1>
    <ul>
      <li style="color:green">첫번째 아이템</li>
      <li style="color:yellowgreen">두번째 아이템</li>
      <li style="color:turquoise">세번째 아이템</li>
    </ul>
  </p>
);
// render(vdom3, document.querySelector("#root"));

// function Title(props) {
//   //컴포넌트가 바깥쪽에서 props를 데이터로 주입받아서 활용
//   return <h1>{props.children}</h1>;
// }
function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>;
}
// const vdom4 = (
//   //사용자 컴포넌트를 이용해서 만들기
//   <p>
//     <Title>React 잘 만들기</Title>
//     <ul>
//       <Item color="red">첫번째 아이템</Item>
//       <Item color="crimson">두번째 아이템</Item>
//       <Item color="orange">세번째 아이템</Item>
//     </ul>
//   </p>
// );
// render(vdom4, document.querySelector("#root"));

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}
const App = () => (
  //사용자 컴포넌트를 이용해서 만들기
  <p>
    <Title>React 클래스 컴포넌트 잘 만들기</Title>
    <ul>
      <Item color="red">첫번째 아이템</Item>
      <Item color="blue">두번째 아이템</Item>
      <Item color="green">세번째 아이템</Item>
    </ul>
  </p>
);

render(<App />, document.querySelector("#root"));
