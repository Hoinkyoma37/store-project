let add= document.getElementById("addButton");
let container_1= document.getElementById("container_1");
add.onclick= function (event) {
    let brandName= prompt("Marca?");
    let cost= prompt("Precio");
    
    if (brandName.length===0 || cost.length===0) {
        alert("vacio")
    } else {
    event.stopPropagation()
    let div= document.createElement("div");
    console.log(add);
    div.classList.add("div_container");
    container_1.appendChild(div);
    let div_Img= document.createElement("img");
    div.appendChild(div_Img);
    div_Img.src="./img/2e9d2f6e-5b5d-432a-8825-25e44f5902dd.JPG";
    div_Img.classList.add("div_img");
    
    let headline= document.createElement("h4");
    headline.appendChild(document.createTextNode(brandName));
    div.appendChild(headline);
    let price= document.createElement("p");
    price.appendChild(document.createTextNode(`Costo:${cost} $`));
    div.appendChild(price);
    }
  }
  //button2
  let add_2= document.getElementById("addButton_2");
  let container_2= document.getElementById("container_2");
  add_2.onclick= function (event) {
      let brandName= prompt("Marca?");
      let cost= prompt("Precio");
      
      if (brandName.length===0 || cost.length===0) {
          alert("vacio")
      } else {
      event.stopPropagation()
      let div= document.createElement("div");
      console.log(add);
      div.classList.add("div_container");
      container_2.appendChild(div);
      let div_Img= document.createElement("img");
      div.appendChild(div_Img);
      div_Img.src="./img/2e9d2f6e-5b5d-432a-8825-25e44f5902dd.JPG";
      div_Img.classList.add("div_img");
      
      let headline= document.createElement("h4");
      headline.appendChild(document.createTextNode(brandName));
      div.appendChild(headline);
      let price= document.createElement("p");
      price.appendChild(document.createTextNode(`Costo:${cost} $`));
      div.appendChild(price);
      }
    }
    //button3
    let add_3= document.getElementById("addButton_3");
    let container_3= document.getElementById("container_3");
    add_3.onclick= function (event) {
        let brandName= prompt("Marca?");
        let cost= prompt("Precio");
        
        if (brandName.length===0 || cost.length===0) {
            alert("vacio")
        } else {
        event.stopPropagation()
        let div= document.createElement("div");
        console.log(add);
        div.classList.add("div_container");
        container_3.appendChild(div);
        let div_Img= document.createElement("img");
        div.appendChild(div_Img);
        div_Img.src="./img/2e9d2f6e-5b5d-432a-8825-25e44f5902dd.JPG";
        div_Img.classList.add("div_img");
        
        let headline= document.createElement("h4");
        headline.appendChild(document.createTextNode(brandName));
        div.appendChild(headline);
        let price= document.createElement("p");
        price.appendChild(document.createTextNode(`Costo:${cost} $`));
        div.appendChild(price);
        }
      }