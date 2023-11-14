
let button= document.getElementById("button");
let nav= document.getElementById("aside_nav");
let container= document.getElementById("container");
let body= document.querySelector("body");
container.classList.toggle("pointer");
button.addEventListener("click",function () {
  nav.classList.toggle("hidden");
  if (nav.classList.contains("hidden")) {
    nav.style.left="-50vw";
    body.style.overflow="auto";
  } else {
    nav.style.left="0px";
    body.style.overflow="hidden";
  }
  
  container.classList.toggle("pointer");
}) 



    
  
 
  


  
