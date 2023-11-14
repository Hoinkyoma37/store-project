let upload = document.getElementById("submit");

upload.onclick = (e) => {
    let description = document.getElementById("precio");
    let imgF = document.getElementById("file");
    console.log(imgF.files[0]);

    //imagen random
    let r = (Math.random() + 1).toString(36).substring(2);

    let extension = imgF.files[0].name//.split('.').pop();

    let imgName = r + '.' + extension;

    const formData = new FormData;
    formData.append('file', imgF.files[0], imgName);

    if (imgF == '') {
        alert(vacio);
    } else {


        //subida
        console.log(formData.get('file'));
        uploadImg(formData);
        //envio de  datos


    }

    async function uploadImg(formData) {
        const res = await fetch("http://localhost:3000/api/uploads", {

            method: "POST",
            headers: {
                'Accept': 'Application/Json'
            },
            body: formData

        });

        const data = await res.json();
        console.log(data);

        let img = document.createElement('img');
    }

    img.src = '../uploads/images/e927aefc-aa42-4aaa-abb2-25f508de845e.jpg'
    let divData = document.getElementById('div_req');
    console.log(divData);
    divData.appendChild(img);
}