let inputFile = document.getElementById('file_image');
let inputIcon = document.getElementById('form_icon');
//let upload = document.getElementById("submit");
//console.log(imgF);
inputIcon.onclick= (e)=>{   
   inputFile.click(e);
};



// subir datos

send.onclick = (event)=>{
	form.classList.toggle("display_F");
	container.classList.toggle("pointer"); 
	
	event.preventDefault();
	let imgF= document.getElementById('file_image');  
	let descriptionPrice = document.getElementById("precio").value;
	let descriptionMarca = document.getElementById("marca").value;
	console.log(imgF.files[0]);
	console.log(descriptionPrice);
	console.log(descriptionMarca);
	
	

	
			
	if (descriptionPrice =='' || descriptionMarca =='' || imgF =='') {
			alert('campos vacios');
	} else {
			
		//imagen random
		let r = (Math.random()+ 1).toString(36).substring(2);

		let extension = imgF.files[0].name.split('.').pop();

		let imgName = r + '.' + extension;

		const formData = new FormData;
		formData.append('MyFile', imgF.files[0], imgName );



		//subida

		console.log(formData.get('MyFile'));
		uploadImg(formData);

		//envio de  datos
		postData(descriptionMarca, descriptionPrice, imgName);
		//window.location.href = 'index.html'
	}



    
}

async function uploadImg(formData){
  await fetch("",{
        
    method: "POST",
      headers:{
       'Accept': 'application/json'
      },
      body: formData

  });
}
async function postData(descriptionMarca, descriptionPrice, imgF) {
	const res = await fetch('', {
		method: "POST",
    headers:{
			'Accept': 'application/json',
			'Content-type': 'application/json'
		 },
		 body: JSON.stringify({

            'descriptionPrice' : descriptionPrice,
			'descriptionMarca' : descriptionMarca,
			'image': imgF

		 })
	 }
	);
	const data = await res.json();
	console.log(data);
}