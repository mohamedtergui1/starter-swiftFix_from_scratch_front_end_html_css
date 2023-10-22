let longeur =document.querySelectorAll(".Testimonial_block")
 
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