const articalNumber= new URLSearchParams(window.location.search).get("articalNumber") ;
const data = JSON.parse(localStorage.getItem("list-items"));
const title = data[articalNumber].title ;
const content = data[articalNumber].content ;
const date = data[articalNumber].date ;
const image = data[articalNumber].file ;

 function renderArticle() {
        document.getElementById("dynTitle").textContent = title;
        document.getElementById("dynDate").textContent =
          `Published: ${new Date(date).toLocaleDateString("en-US",{day:"numeric" , month:"long"})}`;

        document.getElementById("dynImage").src = image;
        document.getElementById("dynImage").alt = title;

        document.getElementById("dynContent").innerHTML = content;
      }



document.addEventListener(
   "DOMContentLoaded", () => {
  renderArticle();
   }
);
