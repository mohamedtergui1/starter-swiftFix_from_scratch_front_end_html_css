 let submit_but=document.querySelector(".input_submit");
    let validt_first_name = document.querySelector("#first_name");
    submit_but.addEventListener('click',function () {
        var resulati=validt_first_name.value.replace(/[A-Za-z ]/g,"0")
         resulati=resulati.replace(/0*0/g,"1")
         if (resulati==="1") {
           validt_first_name.style.border=`solid ${0.3}rem green`

        }
        else{
            validt_first_name.style.border=`solid ${0.3}rem red`
        }
    });
    let validt_last_name = document.querySelector("#last_name");
    submit_but.addEventListener('click',function () {
        var resulati=validt_last_name.value.replace(/[A-Za-z ]/g,"0")
        resulati=resulati.replace(/0*0/g,"1")
        if (resulati==="1") {
            validt_last_name.style.border=`solid ${0.3}rem green`
        }
        else{
            validt_last_name.style.border=`solid ${0.3}rem red`
         }
    });
    let validt_email = document.querySelector("#email");
    submit_but.addEventListener('click',function () {
        var resulati=validt_email.value.replace(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g,"1")
        console.log(resulati)

       if (resulati==="1") {
          validt_email.style.border=`solid ${0.3}rem green`
       }
       else{
        validt_email.style.border=`solid ${0.3}rem red`
        }
    });
    submit_but.addEventListener('click',function () {
         alert
    });
    // //////////////////////////////////////////////////////////
   