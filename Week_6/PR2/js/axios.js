import axios from "axios";

function fetchMovies() {
  axios.get("https://www.omdbapi.com/?apikey=89f495a7&s=frozen").then((res) => {
    console.log(res);
    const h1El = document.querySelector("h1");
    const imgEl = document.querySelector("img");
    h1El.textContent = res.data.Search[0].Title;
    imgEl.src = res.data.Search[0].Poster;
  });
  //axios를 통해서 헤딩하는 주소의 내용을 얻어서(get)
  //그것을 then이라는 메소드에서 처리해서 활용
  //res(response)는 응답이라는 뜻을 가지고 있고 서버로 요청이 들어가고
  //나온 결과가 응답이라는 개념으로 반환이 되서 then이라는
  //메소드의 콜백함수 내부에서 활용할 수 있음
}
fetchMovies();
