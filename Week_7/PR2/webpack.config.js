//기본적으로 node.js파일
//webpack.config파일의 구조는 웹팩에 입력값으로 config파일을 제공해주는 역할을 함
//웹팩이 필요로 한 스팩 형태대로 객체를 export 해주어야함
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //객체의 모양은 웹팩이 기본가이드 하고 있어서 웹팩 가이드에 따라 필요한 것들을 넣어주면 됨
  mode: "development", //개발형태 파일
  //최종적으로 서비스할 목적으로 만드는가, 개발중인 형태 파일을 만드는가
  entry: "./src/app.js", //입력정보. 즉 어떤 JS파일에서 시작할 것인지
  output: {
    //출력정보. 여러가지가 필요해서 객체로
    path: path.resolve(__dirname, "dist"), //현재 디렉토리, 출력할 디렉토리
    filename: "bundle.js",
  },
  //1.어느 디렉토리에 쓸꺼야? 2.어떤 이름을 쓸꺼야?
  devServer: {
    //devServer을 쓸수 있도록 세팅
    compress: true, //압축해라
    port: 9999, //어떤 포트 쓸꺼야?
  },
  module: {
    //변환과정에서 변환시켜줄
    rules: [
      //rules안에 지정하는 것을 loader라고 하는데 여러개니깐 배열이고
      {
        //여러가지 파일(css,img 등)이 들어오는 babel-loader는 JS파일만 처리하므로 필요없는 파일 제거
        test: /\.js$/, //정규식. 파일명이 js인 파일들. 정규식에 매칭되는 파일들만 loader에게 넘김
        //배열안에 각각의 객체로 어떻게 동작하는게 좋을지 옵션정보를 넣어줌
        exclude: /node_modules/, //node_modules폴더 loader제외
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], //presets에는 설치했던 babel플러그인을 세팅하면 됨
          },
        },
      },
    ],
  },
  plugins: [
    //마지막처리과정을 변환시켜줄
    //html웹팩 플러그인은 html파일을 받아서 최종적인 번들링 파일에 아웃풋으로 내보낼때
    //사용될 html을 생성해주고 거기에다가 템플릿화해서 다른 부가적인 처리를 할 수도 있는 기능제공
    new HtmlWebpackPlugin({
      title: "setup webpack & babel",
      template: "index.html", //어떤 html파일을 쓸것인지
    }),
    //함수니깐() 인스턴스를 만들어주어야함(new) 이런정보는 해당하는 패키지의 문서를 보면 알 수 있음
  ],
  //웹팩은 크게 2가지 정보를 세팅함(module, plugins)
  //entry -> module -> plugins-> output
  //기본적인 구성
};
