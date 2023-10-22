let btnfaQ = document.querySelectorAll(".btn_faq");
let blockfaQ = document.querySelectorAll(".faq_block");

for (let i=0;i<btnfaQ.length;i++) {
  btnfaQ[i].addEventListener('click',function(){
    blockfaQ[i].classList.toggle("heighT");
  });
}
let btn_read_more =document.querySelector(".button_about")
let read_more_info =document.querySelector(".container_read_more_info")
btn_read_more.addEventListener('click',function(){
    read_more_info.classList.add("display_flex");
});
let btn_close_read_more =document.querySelector(".btn_read_more")
btn_close_read_more.addEventListener('click',function(){
    read_more_info.classList.remove("display_flex");
})