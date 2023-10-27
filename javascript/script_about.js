let btnfaQ = document.querySelectorAll(".btn_faq");
let blockfaQ = document.querySelectorAll(".faq_block");

for (let i=0;i<btnfaQ.length;i++) {
  btnfaQ[i].addEventListener('click',function(){
    blockfaQ[i].classList.toggle("heighT");
    for (let j=0;j<btnfaQ.length;j++){
           if(i!==j){
            blockfaQ[j].classList.remove("heighT");
           }
    }
  });
}

 const afficher_modal = document.querySelector(".read_more_info")
 const  btn_read_more_about=document.querySelector(".button_about")
 btn_read_more_about.addEventListener('click',function(){
  afficher_modal.showModal();
  }
);
const btn_clse_model=document.querySelector(".btn_read_more")
btn_clse_model.addEventListener('click',function(){
  afficher_modal.close();
  }
);
afficher_modal.addEventListener('keyup',(e)=>{
    if (e.key ='echarp'){
      afficher_modal.close();
    }
})
const cntnr=document.querySelector('.container_about_page')
if(afficher_modal===`open`){
cntnr.addEventListener('click',()=>{
  afficher_modal.close();
})}