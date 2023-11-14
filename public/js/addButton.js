let add= document.getElementById("addButton");
let container_1= document.getElementById("container_1");
let form= document.getElementById("container_form");
let send= document.getElementById("submit");
send.onclick = ()=>{
  form.classList.toggle("display_F");
  container.classList.toggle("pointer");
  document.getElementById('form').reset();
}


//buttom1
add.onclick= function () {
  displayNav();
  form.classList.toggle("display_F");
  container.classList.toggle("pointer");
  send.onclick;
}     
  
  
 
 
//button2

let add_2= document.getElementById("addButton_2");
let container_2= document.getElementById("container_2");

add_2.onclick= function () {
  displayNav();
  form.classList.toggle("display_F");
  container.classList.toggle("pointer");
  send.onclick;  
  
  }
   
     
//button3

let add_3= document.getElementById("addButton_3");
let container_3= document.getElementById("container_3");

add_3.onclick= function (event) {
  displayNav();
  form.classList.toggle("display_F");
  container.classList.toggle("pointer");
  send.onclick; 


}   


      
    

let playContact= document.getElementById("display_4");
console.log(playContact)
playContact.onclick= function () {
  let list= document.getElementById("contact_list");
  console.log(list);
  list.classList.toggle("display_list");
}



