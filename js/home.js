const aside = document.getElementById("home-aside");
let data = localStorage.getItem("list-items");
const searchInput = document.getElementById("search");
let items=[];

window.onload = () => {
   
    renderArticales();
  
};

function load(){
 if (!data || data == "[]") {
    document.getElementById("emptyState").style.display = "flex";
  }

  data = localStorage.getItem("list-items");
  items =JSON.parse(data)??[];
}

function renderArticales() {
 load();
  document.getElementById("list-items").innerHTML = '';

  items.forEach((artical, index) => {
    document.getElementById("list-items").innerHTML +=buildCardItem(artical, index) ;
  });
}


  

function deleteArticle(articleNumber) {
  items.splice(articleNumber, 1);

  localStorage.setItem("list-items", JSON.stringify(items));

  load()
  renderArticales();
}

function edit(articleNumber) {
  let url = `create-artical.html?articleNumber=${articleNumber}`;

  window.location.href = url;
}

function onMenuClicked(){
 aside.style.display = (aside.style.display == "flex")?"none": "flex"  ;
}

function openReadPage(index){
  window.location.href =`read-artical.html?articalNumber=${index}`;
}


function buildCardItem(artical, index){
  return`<div class="card-container">
          <div class="card-left">
            <div class="profile">
              <div class="avatar">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 40 40"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="15" r="7" fill="#555" />
                  <circle cx="20" cy="38" r="12" fill="#555" />
                </svg>
              </div>
              <span class="username">Nagm</span>
              <span class="articleBtns">
                  <img class="articleBtn" onclick="deleteArticle(${index})" src="images/trash-can.png" >
                  <img class="articleBtn" onclick="edit(${index})" src="images/edit.png">
                  <img class="articleBtn" onclick="openReadPage(${index})" src="images/book.png">
              </span>
            </div>

            <div class="stats">
              <div class="stat-item">
                <svg
                  class="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20V10M18 20V4M6 20v-6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="value">0</span>
              </div>
              <div class="stat-item">
                <svg
                  class="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="value">0</span>
              </div>
            </div>
          </div>

          <div class="card-right">
            <div class="letter-box">
              <span class="letter"> ${artical.title.slice(0, 1)} </span>
            </div>
            <div class="post-info">
              <h3 class="post-title"> ${artical.title} </h3>
              <div class="post-meta">
                <span class="separator">•</span>
                <span class="date"> ${new Date(artical.date).toLocaleDateString('en-US', {day: 'numeric', month: 'long'})} </span>
              </div>
            </div>
          </div>
        </div>
        `
}



searchInput.addEventListener('change' , (e)=>{
document.getElementById("list-items").innerHTML = '';

  items.forEach((artical, index) => {
    if (artical.title.includes(searchInput.value)) {
      document.getElementById("list-items").innerHTML +=buildCardItem(artical, index) ;
    }
  });
 });