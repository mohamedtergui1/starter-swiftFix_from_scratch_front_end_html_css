  let msssge = document.querySelectorAll(".message_validate")
  console.log(msssge)
 let submit_but=document.querySelector(".input_submit");
let status_Fnom=0,status_Lnom=0,status_email=0,status_select=0,status_mssg=0;
 function check_submit_status(){
       if(status_Fnom&&status_Lnom&&status_email&&status_mssg&&status_select){
        submit_but.removeAttribute("disabled")
        submit_but.style.position="static"
       }
       else{
        submit_but.setAttribute("disabled", "disabled");
       
       }
       setTimeout(check_submit_status,500);
 }
 var changee=0;
 submit_but.addEventListener('mouseover',()=>{

  if(status_Fnom&&status_Lnom&&status_email&&status_mssg&&status_select){
   
   }
   else{
    submit_but.setAttribute("disabled", "disabled");
    submit_but.style.position="absolute"
    submit_but.style.top="61.5rem"
    if(changee%2==0){
    submit_but.style.left="33rem"
   }
   else{
    submit_but.style.left="22.5rem"

   }
   changee++;
  }   
 })
 check_submit_status();
    let validt_first_name = document.querySelector("#first_name");
    validt_first_name.addEventListener('blur',function () {
      var resulati=validt_first_name.value.replace(/[A-Za-z ]/g,"0")
       resulati=resulati.replace(/0*0/g,"1")
       if (resulati==="1") {
         validt_first_name.style.border=`solid ${0.3}rem green`
         msssge[0].classList.add("display_block_succ")
         msssge[0].classList.remove("display_block_err")
         msssge[0].textContent="succes"
         status_Fnom=1;
      }
      else{
          validt_first_name.style.border=`solid ${0.3}rem red`
          msssge[0].classList.add("display_block_err")
          msssge[0].classList.remove("display_block_succ")
          msssge[0].textContent="error"
          status_Fnom=0;  
      }
  });
    let validt_last_name = document.querySelector("#last_name");
    validt_last_name.addEventListener('blur',function () {
      var resulati=validt_last_name.value.replace(/[A-Za-z ]/g,"0")
      resulati=resulati.replace(/0*0/g,"1")
      if (resulati==="1") {
          validt_last_name.style.border=`solid ${0.3}rem green`
          msssge[1].classList.add("display_block_succ")
          msssge[1].classList.remove("display_block_err")
          msssge[1].textContent="succes"
          status_Lnom=1;
      }
      else{
          validt_last_name.style.border=`solid ${0.3}rem red`
          msssge[1].classList.add("display_block_err")
          msssge[1].classList.remove("display_block_succ")
          msssge[1].textContent="error"
          status_Lnom=0;
       }
  });
    let validt_email = document.querySelector("#email");
    validt_email.addEventListener('blur',function () {
      var resulati=validt_email.value.replace(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g,"1")
      console.log(resulati)
     if (resulati==="1") {
        validt_email.style.border=`solid ${0.3}rem green`
        msssge[2].classList.add("display_block_succ")
        msssge[2].classList.remove("display_block_err")
        msssge[2].textContent="succes"
        status_email=1;
     }
     else{
      validt_email.style.border=`solid ${0.3}rem red`
      msssge[2].classList.add("display_block_err")
      msssge[2].classList.remove("display_block_succ")
      msssge[2].textContent="error"
      status_email=0;
      }
  });
      let select_input=document.querySelector("#subject")
      select_input.addEventListener('blur',()=>{
          console.log(select_input.value)
            if(select_input.value==="subject"){
              msssge[3].classList.add("display_block_err")
              msssge[3].classList.remove("display_block_succ")
              msssge[3].textContent="you must to choose subject"
              status_select=0;
            }
            else{
              msssge[3].classList.add("display_block_succ")
              msssge[3].classList.remove("display_block_err")
              msssge[3].textContent="succes"
              status_select=1;
            }
      });
    let mssg_from_clnt = document.querySelector("#message")
    mssg_from_clnt.addEventListener('blur',function () {
        var test_va=document.querySelector("#message").value
         if ( test_va!==""){
            mssg_from_clnt.style.border=`solid ${0.3}rem green`
            msssge[4].classList.add("display_block_succ")
            msssge[4].classList.remove("display_block_err")
            msssge[4].textContent="succes"
            status_mssg=1;
         }
         else{
            mssg_from_clnt.style.border=`solid ${0.3}rem red`
            msssge[4].classList.add("display_block_err")
            msssge[4].classList.remove("display_block_succ")
            msssge[4].textContent="you must to leave  message"
            status_mssg=0;
            }
   });
     
   