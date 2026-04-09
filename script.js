function nextPage() {
  window.location.href = "page2.html";
}

function goNext() {
  window.location.href = "page3.html";
}

function goCake() {
  window.location.href = "page4.html";
}

const noBtn = document.getElementById("noBtn");

if(noBtn){
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * window.innerHeight + "px";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
  });
}