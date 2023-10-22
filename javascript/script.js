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
    if(window.innerWidth<1023){
       dropservices.style.position='static'
    }
  });
let iconSearch = document.querySelector("#icon_search");
let inputSearch =document.querySelector("#Search_input");
let s =0;
iconSearch.addEventListener('click',function() {
  if(s===14){s=0;}
  else{s=14};
  inputSearch.classList.toggle("open_search");
  iconSearch.classList.toggle("delete_padding_icon_search");
  dropservices.style.right=`${s}rem`
  
});
let buttonServices =document.querySelector("#drop_services_button_id");
let dropservices = document.querySelector("#drop_services");
 

buttonServices.addEventListener('click',function() {
  dropservices.classList.toggle("afficher_services_droped");
  if(window.innerWidth>=1023){
    dropservices.style.position='absolute'
  } 
  else{
    dropservices.style.position='static'

  }
});
if(window.innerWidth>=1023){
  dropservices.style.position='absolute'
} 

// //////////////////////////////////////
 
// Call the function
 

    // -------------------------------------------

    //  let submit_but=document.querySelector(".input_submit");
    // let validt_first_name = document.querySelector("#first_name");

   
    
    // submit_but.addEventListener('click',function () {
       
    //   var all_litr = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn ";
    //   for(let j=0;j<validt_first_name.value.length;j++){
    //     let state=0;
    //     for(let k=0;k<all_litr.length;k++){
    //       if(all_litr[k]===validt_first_name.value[j]){
    //         state++;
           
    //     }
        
    //     }
    //     if(state===0){
    //       validt_first_name.style.backgroundColor='red';
    //       break
    //   }
    // }
    // });
    // let validt_last_name = document.querySelector("#last_name");
    // submit_but.addEventListener('click',function () {
    //   let p=0;
    //   let all_litr = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn ";
    //   for(let j=0;j<validt_last_name.value.length;j++){
    //     let state=0;
    //     for(let k=0;k<all_litr.length;k++){
    //       if(all_litr[k]===validt_last_name.value[j]){
    //         state++;
    //     }
    //     }
    //     if(state===0){
    //       validt_last_name.style.backgroundColor='red';
    //       break
    //     }
    //      p++;
    //   }
    //    if(p===validt_last_name.value.length){
    //     validt_last_name.classList.add("green_back");
    //     alert=("")
    //    }
    // });
    // let validt_email = document.querySelector("#email");
    // submit_but.addEventListener('click',function () {
    //   let all_litr = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn ";
    //   let litr_min="azertyuiopqsdfghjklmwxcvbn";
    //   let litr_sym="azertyuiopqsdfghjklmwxcvbn._-0123456789"
   
    //   for(let i=0;i<validt_email.value.length;i++){
    //     for( let j=0;j<validt_email.value.length;j++){
    //       if(validt_email.value[i]===litr_min[i])
    //     }
    //   }
    // });
 

    // // //////////////////////////////////////////////////////////
 