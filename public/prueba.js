let upload = document.getElementById("submit");

upload.onclick = (e) => {
    // let description = document.getElementById("price");
    let imgF = document.getElementById("file");
    // console.log(imgF.files[0]);

    //image random
    let r = (Math.random() + 1).toString(36).substring(2);

    let extension = imgF.files[0].name.split('.').pop();

    let imgName = r + '.' + extension;

    const formData = new FormData;
    formData.append('file', imgF.files[0], imgName);

    if (imgF == '') {
        alert(empty);
    } else {
        //upload
        // console.log(formData.get('MyFile'));
        uploadImg(formData);
        //send metadata

    }

    async function uploadImg(formData) {

        const res = await fetch("http://localhost:3000/api/uploads", {

            method: "POST",
            headers: {
                'Accept': 'Application/Json',
            },
            body: formData

        });
        if (res) {
            // console.log(res)
        } else {
            console.log('bitch')
        }
    }
}