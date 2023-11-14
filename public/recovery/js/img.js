
const previewImg= document.getElementById("preview");
const upload= document.getElementById("input_file");
const serveUrl= "http://localhost:3000";


upload.addEventListener("change",async(event)=>{
    console.log(event);
    const file= event.target.files[0].name;
    console.log(file[2]);

    fetch(serveUrl, {
        method:'POST',
        body:file
    })

}
)