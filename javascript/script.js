let icon = document.querySelector("#icon_drop_menu");
let navbar =document.querySelector("#navBar");
let aTig =document.querySelector("#a");
let bTig =document.querySelector("#b");
let cTig =document.querySelector("#c");

icon.addEventListener('click', function() {
    navbar.classList.toggle("nabar_drop_down");
    aTig.classList.toggle("tige_a");
    bTig.classList.toggle("tige_b");
    cTig.classList.toggle("tige_c");

  });
let iconSearch = document.querySelector("#icon_search");
let iputSearch =document.querySelector("#Search_input");
iconSearch.addEventListener('click',function() {
  iputSearch.classList.toggle("open_search");
  iconSearch.classList.toggle("delete_padding_icon_search");
});