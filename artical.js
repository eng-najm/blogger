 const parameter = new URLSearchParams(window.location.search);
 const title = document.getElementById("title") ;
 const content = document.getElementById("content") ;
 const file = document.getElementById("image");

 let items = [];

document.addEventListener(
   "DOMContentLoaded", () => {
      load();
   }
);




function load(){
    let data = localStorage.getItem("list-items");

     if (data) items = JSON.parse(data);

     if ( Boolean(parameter.get("articleNumber")) )
     {
      title.value= items[parameter.get("articleNumber")].title;
      content.value = items[parameter.get("articleNumber")].content;

     }
}

function handleFunction() {
   alert("hhh");
   if ( Boolean(parameter.get("articleNumber")) ) {
      editArtical();
   } else {
      addArtical();
   }
}


function editArtical() {
   items[ parameter.get("articleNumber") ].title = title.value;
   items[ parameter.get("articleNumber") ].content = content.value;
   
   
 localStorage.setItem("list-items",
   JSON.stringify(items)
 );

 window.location.href = "home.html";
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

 window.location.href = "home.html";
});


