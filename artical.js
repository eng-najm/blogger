let items = [];
 const title = document.getElementById("title") ;
 const content = document.getElementById("content") ;
 const file = document.getElementById("image");
 let url ;


function load(){
    let data = localStorage.getItem("list-items");
     if (data){
        items = JSON.parse(data);
     }
}

function addArtical (){
load();
 let artical = {
    title: title.value ,
    content:content.value,
    file: url,
    date: new Date()
 } ;

 items.unshift(artical);

 localStorage.setItem(
   "list-items",
   JSON.stringify(items)
 );

 console.log(artical);
}

file.addEventListener('change' , (e)=>{
       const fr = new FileReader();
 
 fr.readAsDataURL(file.files[0]);

 fr.addEventListener('load',(e)=>{
     url = fr.result ;
 }) 
});