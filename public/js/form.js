let inputFile = document.getElementById('file_image');
let inputIcon = document.getElementById('form_icon');

inputIcon.onclick = (e) => {
	inputFile.click(e);
};

send.onclick = (event) => {
	form.classList.toggle("display_F");
	container.classList.toggle("pointer");

	event.preventDefault();
	let imgF = document.getElementById('file_image');
	let price = document.getElementById("price").value;
	let name = document.getElementById("name").value;
	let category_id = document.getElementById("category_id").value

	if (price == '' || name == '' || category_id == ''||imgF.length == 0) {
		alert('empty fields');
	} else {

		//image random

		let imgName = imgF.files[0].name

		const formData = new FormData;
		formData.append('file', imgF.files[0], imgName);


		// Login

		// Upload
		uploadImg(formData)
			.then(imageName => postData(name, price, category_id, imageName)) // Send to DB
			.then(c => console.log(c))

		// window.location.href = 'index.html';

		getData().then(d=> console.log(d))
	}
}

async function uploadImg(formData) {
	const res = await fetch("/api/uploads", {

		method: "POST",
		headers: {
			'Accept': 'application/json'
		},
		body: formData

	});
	const data = await res.json()
	console.log(data)
	const imgName = data.name
	return imgName
}

async function postData(name, price, category_id, imgName) {
	const resp = await fetch("/api/items", {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		},
		body: JSON.stringify({

			'name': name,
			'price': price,
			'category_id': category_id,
			'image': imgName

		})
	});
	const data = await resp.json();
	console.log(data)
}


// Tienes q trabajar en esto para poder restringir el acceso a la api a través de Json web Token


// async function login() {
// 	const res = await fetch("/api/auth/login", {
// 		method: "POST",
// 		headers: {
// 			'Accept': 'application/json',
// 			'Content-type': 'application/json',
// 		},
// 		body: JSON.stringify({

// 			'password': password,
// 			'email': email
// 		})
// 	});
// 	const data = await res.json();
// 	console.log(data);
// }


async function getImage(table = 'items', id){
	const res  = await fetch(`/api/uploads/${table}/${id}`, {
		method: 'GET',
	});

	return res
}

async function getData(){
	const res = await fetch("api/items");
	data = res.json()
	for (item of data.items){
		const image = getImage({id:item.image})
	}
}