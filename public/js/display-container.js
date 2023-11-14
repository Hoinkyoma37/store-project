let display_1= document.getElementById("display_1");
console.log(display_1);

display_1.onclick= function (event) {
    container_1.style.display="grid";
    container_2.style.display="none";
    container_3.style.display="none";
    displayNav();
}
let display_2= document.getElementById("display_2");
console.log(display_2);
display_2.onclick= function (event) {
    container_1.style.display="none";
    container_2.style.display="grid";
    container_3.style.display="none";
    displayNav();
}
let display_3= document.getElementById("display_3");
console.log(display_3);
display_3.onclick= function (event) {
    container_1.style.display="none";
    container_2.style.display="none";
    container_3.style.display="grid";
    displayNav();
}