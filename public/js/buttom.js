
let button= document.getElementById("button");
let nav= document.getElementById("aside_nav");
let container= document.getElementById("container");
let body= document.querySelector("body");

const displayNav= ()=>{
  nav.classList.toggle("hidden");
  document.getElementById('form').reset();
  if (nav.classList.contains("hidden")) {
    nav.style.left="-50vw";
    body.style.overflow="auto";
  } else {
    nav.style.left="0px";
    body.style.overflow="hidden";
  }

  container.classList.toggle("pointer");
  
};

container.classList.toggle("pointer");

button.addEventListener("click",function () {
  displayNav();
  if (!form.classList.contains("display_F")) {
    
    form.classList.toggle("display_F");
    container.classList.toggle("pointer");

  }
}) 



    
  
 
  


  
