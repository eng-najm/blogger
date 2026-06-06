/*
<div class="card-container">
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
              <span class="letter">ب</span>
            </div>
            <div class="post-info">
              <h3 class="post-title">(بلا عنوان)</h3>
              <div class="post-meta">
                <span class="status">مسودة</span>
                <span class="separator">•</span>
                <span class="date">25 مايو</span>
              </div>
            </div>
          </div>
        </div>*/
let listItems = document.getElementById("list-items");

let items = [];

window.onload = ()=> {
    listItems = localStorage.getItem("list-items") ;
    if (!listItems) {
        document.getElementById("emptyState").style.display= "flex";
    }
}



