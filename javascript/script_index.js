let longeur = document.querySelectorAll(".Testimonial_block")
var len_tstmnls = longeur.length
let delay_on_testimonialise = document.querySelector("#testimonials_id");
let i = 0;
let x = 1;
function toggleFlexDirection() {
  if (i > len_tstmnls - 2) { x = -1; }
  if (i < 1) { x = 1; }

  delay_on_testimonialise.style.transform = `translateX(-${53.9 * i}rem)`;
  setTimeout(toggleFlexDirection, 3000);
  i += x;
}

toggleFlexDirection();

let btn_add_tsts = document.querySelector("#btn_add_tist")
let f_name = document.querySelector("#f_n_tsts")
let job_tst = document.querySelector("#job_tst")
let ttl_tst = document.querySelector("#title_tst")
let mssg_tst = document.querySelector("#txt_ar")
let pic_tst = document.querySelector("#Photo")
let parent_of_block_tst = document.querySelector("#testimonials_id")
btn_add_tsts.addEventListener('click', function () {
  let h2_name = document.createElement("h2")
  h2_name.className = "Testimonial_container_blocks_nom_client_font"
  h2_name.textContent = f_name.value
  let h3_mssg = document.createElement("h3")
  h3_mssg.className = "Testimonial_container_blocks_work_client"
  h3_mssg.textContent = job_tst.value
  let div_h2_h4 = document.createElement("div")
  div_h2_h4.appendChild(h2_name)
  div_h2_h4.appendChild(h3_mssg)
  let img_ele = document.createElement("img")
  img_ele.className = "client_img_size"
  console.log(img_ele)
  img_ele.src = pic_tst.value
  img_ele.alt = "client"
  let div_img_name_job = document.createElement("div")
  div_img_name_job.classList = "Testimonial_container_blocks_nom_client"
  div_img_name_job.appendChild(img_ele)
  div_img_name_job.appendChild(div_h2_h4)
  let t_msg = document.createElement("p")
  t_msg.textContent = ttl_tst.value
  let div_t_msg = document.createElement("div")
  div_t_msg.className = "Testimonial_block_comment_title"
  div_t_msg.appendChild(t_msg)
  let p_msg = document.createElement("p")
  p_msg.textContent = mssg_tst.value
  let div_p_msg = document.createElement("div")
  div_p_msg.className = "Testimonial_block_comment_paragragh"
  div_p_msg.appendChild(p_msg)
  let div_p_msg_t = document.createElement("div")
  div_p_msg_t.className = "Testimonial_block_comment"
  div_p_msg_t.appendChild(div_t_msg)
  div_p_msg_t.appendChild(div_p_msg)
  let all_block_tst = document.createElement("div")
  all_block_tst.className = "Testimonial_block"
  all_block_tst.appendChild(div_p_msg_t)
  all_block_tst.appendChild(div_img_name_job)
  console.log(all_block_tst)
  parent_of_block_tst.appendChild(all_block_tst)
  console.log(len_tstmnls)
  len_tstmnls++;
  console.log(len_tstmnls)

})