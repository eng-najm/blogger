let items = [];
 const title = document.getElementById("title").value ;
 const content = document.getElementById("content").value ;
 const file = document.getElementById("image");
let url ;
window.onload= ()=>{
    let data = localStorage.getItem("list-items");
     if (data){
        items = JSON.parse(data) ;
     }
}


function addArtical (){


 console.log(url); 
 let artical = {
    title: title ,
    content:content,
    file: url
 } ;

 
}

file.addEventListener('change' , (e)=>{
       const fr = new FileReader();
 
 fr.readAsDataURL(file.files[0]);

 fr.addEventListener('load',(e)=>{
     url = fr.result ;
 }) 
});