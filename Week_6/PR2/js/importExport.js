import _ from "lodash"; //From `node_modules`
//lodash를 npm으로 설치해서 import키워드로 node_modules폴더에서 가져와서
//_이름의 기호에 이름으로 main.js에서 활용히겠다고 선언
import getType from "./getType"; //getType.js
//상대경로를 이용해서 가져와 활용할수 있음
//import 뒤에 이름은 마음대로 변경 가능
// import { random, user as he } from "./getRandom";
//이름이 지정된 통로로 나오는 데이터는 데이터를 {}중괄호로 묶어서 사용해야함
//as를 사용하여 user를 he로 사용할 수 있음
import * as R from "./getRandom";
//한번에 가져올 때

console.log(_.camelCase("the hello world"));
console.log(getType([1, 2, 3]));
// console.log(random(), random());
console.log(R);
