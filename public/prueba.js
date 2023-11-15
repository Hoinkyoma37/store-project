let upload = document.getElementById("submit");

upload.onclick = (e)=>{
    let description = document.getElementById("precio");
    let imgF= document.getElementById("file");
    console.log(imgF.files[0]);
    
    //imagen random
    let r = (Math.random()+ 1).toString(36).substring(2);

    let extension = imgF.files[0].name.split('.').pop();

    let imgName = r + '.' + extension;

    const formData = new FormData;
    formData.append('MyFile', imgF.files[0], imgName );
 
    if (imgF=='') {
        alert(vacio);
    } else {
        

     //subida
     console.log(formData.get('MyFile'));
      uploadImg(formData);
     //envio de  datos


    }

    async function uploadImg(formData){
        await fetch("http://localhost:3000",{
            
            method: "POST",
            headers:{
                'Accept': 'Application/Json'
            },
            body: formData

        });
    }
}