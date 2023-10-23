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
 
let msg_faq=document.querySelector('#message_faq')
let  title_faq=document.querySelector('#title_faq_input')
let  faq_btn_=document.querySelector('#add_faq_btn')
let parent_faq=document.querySelector('#prnt_block')

faq_btn_.addEventListener('click', function () {
  
  let mssg_e = msg_faq.value;
  let titl_e = title_faq.value;
 console.log(mssg_e)
 console.log(titl_e)

  let paragragh_ele = document.createElement("p");
  paragragh_ele.textContent = mssg_e;
 console.log(parent_faq)
  
  let h4_ele = document.createElement("h4");
  h4_ele.textContent = titl_e;
  console.log(h4_ele)

  let div_ele_btn = document.createElement("div");
  div_ele_btn.className = "btn_faq";

  let div_ele_btn_and_title = document.createElement("div");
  div_ele_btn_and_title.className = "title_and_buton";
  div_ele_btn_and_title.appendChild(h4_ele);
  div_ele_btn_and_title.appendChild(div_ele_btn);

  let faq_block_div = document.createElement("div");
  faq_block_div.className = "faq_block";
  faq_block_div.appendChild(div_ele_btn_and_title);
  faq_block_div.appendChild(paragragh_ele);
  
  let parent_block_faq =document.createElement("div")
  parent_block_faq.className="all_faq_blocks"
  parent_block_faq.appendChild(faq_block_div);
  parent_faq.appendChild(parent_block_faq);
});
