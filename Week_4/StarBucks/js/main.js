const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input"); //searchEl안에 input요소 찾기

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused"); //input요소에 focus가 되면 검색요소 부분에 focused라는 클래스를 추가
  searchInputEl.setAttribute("placeholder", "통합검색"); //input요소에다가 어떤 HTML속성을 지정, (인수, 값)
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused"); //input요소에 focus가 되면 검색요소 부분에 focused라는 클래스를 추가
  searchInputEl.setAttribute("placeholder", ""); //input요소에다가 어떤 HTML속성을 지정, (인수, 값)
});
