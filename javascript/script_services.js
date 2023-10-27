const afficher_modal = document.querySelectorAll(".read_more_info")
 const  btn_read_more_services=document.querySelectorAll(".service_btn_read_more")
 const  btn_read_more_services_clse=document.querySelectorAll(".btn_read_more")

 btn_read_more_services.forEach(btn_read_more_services => {
    btn_read_more_services.addEventListener('click',function(){
        afficher_modal.showModal();
        }
      );
 });
  for (let i=0;i<btn_read_more_services.length;i++){
    btn_read_more_services[i].addEventListener('click',function(){
        afficher_modal[i].showModal();
        }
      );
  }
  for (let i=0;i<btn_read_more_services_clse.length;i++){
    btn_read_more_services_clse[i].addEventListener('click',function(){
        afficher_modal[i].close();
        }
      );
  }
  