async function getData() {
    const res = await fetch('api/posts')
    const data = res.json();
    console.log(data);

    for (item of data.posts) {
        const div = document.createElement('div');
        container_1.appendChild(div);
        div.classList.add('div_container');
        let img = document.createElement('img');
        img.classList.add('div_img');
        img.src='direccion'+item.image;
        div.appendChild(img);
        let typeShoes = document.createElement('h4');
        typeShoes.textContent = item.descriptionMarca;
        div.appendChild(typeShoes);
        let cost = document.createElement('p');
        cost.textContent = item.descriptionPrice;
        div.appendChild(cost);

    }
        
    
}
 getData();
