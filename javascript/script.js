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
let inputSearch =document.querySelector("#Search_input");
iconSearch.addEventListener('click',function() {
  inputSearch.classList.toggle("open_search");
  iconSearch.classList.toggle("delete_padding_icon_search");
});
let buttonServices =document.querySelector("#drop_services_button_id");
let dropservices = document.querySelector("#drop_services");
// let buttonRect = buttonServices.getBoundingClientRect();
// // const  buton_position = butonServices.getBoundingClientRect();
// let buton_positionleft = buttonRect.offsetLeft  + window.scrollX;
// let buton_positionright = buttonRect.offsetTop  + window.scrollY;
// console.log(`Left: ${buton_positionleft}px, Top: ${buton_positionright}px`);
buttonServices.addEventListener('click',function() {
  dropservices.classList.toggle("afficher_services_droped");
});
if(window.innerWidth>=1023){
  dropservices.style.position='absolute'
} 

// //////////////////////////////////////
 
// Call the function
 
// //////////////////////////////////////////////////////////
 let longeur =document.querySelectorAll(".Testimonial_block")
  console.log(longeur.length);
 let delay_on_testimonialise = document.querySelector("#testimonials_id");
  let i=0;
  let x=1;
 function toggleFlexDirection(){
  if(i>longeur.length-2){x=-1;}
  if(i<1) {x=1;}

  delay_on_testimonialise.style.transform = `translateX(-${53.9 * i}rem)`;
      setTimeout(toggleFlexDirection, 3000);
      i+=x;
    }

    toggleFlexDirection();