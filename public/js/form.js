let inputFile = document.getElementById('file_image');
let inputIcon = document.getElementById('form_icon');

//let upload = document.getElementById("submit");
//console.log(imgF);

inputIcon.onclick = (e) => {
	inputFile.click(e);
};

// subir datos

send.onclick = (event) => {
	form.classList.toggle("display_F");
	container.classList.toggle("pointer");

	event.preventDefault();
	let imgF = document.getElementById('file_image');
	let price = document.getElementById("price").value;
	let name = document.getElementById("name").value;
	let category_id = document.getElementById("category_id").value

	console.log(imgF.files[0]);
	console.log(name);
	console.log(price);

	if (price == '' || name == '' || category_id == '') {
		alert('empty fields');
	} else {

		//image random
		let r = (Math.random() + 1).toString(36).substring(2);

		let extension = imgF.files[0].name.split('.').pop();

		let imgName = r + '.' + extension;

		const formData = new FormData;
		formData.append('file', imgF.files[0], imgName);

		//Upload
		uploadImg(formData);

		//send  data

		postData(name, price, category_id, imgName);
	}
}

async function uploadImg(formData) {
	await fetch("/api/uploads", {

		method: "POST",
		headers: {
			'Accept': 'application/json'
		},
		body: formData

	});
}
async function postData(name, price, category_id, imgF) {
	const res = await fetch("/api/items", {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json',
			Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRmZmRhMDY4LTAxNjQtNDgyMi05N2U3LTY2YmI0YTI1MzgwNCIsImlhdCI6MTcwMDQxMTkzOSwiZXhwIjoxNzAzMDAzOTM5fQ.LFt2iMZQMlSFDiZpIr0FBZxu1Yn2qObiJatV-KpPB90'
		},
		body: JSON.stringify({

			'name': name,
			'price': price,
			'category_id': category_id,
			'image': imgF
		})
	});
	const data = await res.json();
	console.log(data);
}