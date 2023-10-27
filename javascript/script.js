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
function respo(){
  if(window.innerWidth>=1023){
    dropservices.style.position='absolute'
  } 
  else{
    dropservices.style.position='static'
  } 
  setTimeout(respo,500)
  }
  respo();


// //////////////////////////////////////
 
// Call the function
 

    // -------------------------------------------
    
    
    