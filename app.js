// navbar open and close
function openNavbar() {
  document.querySelector(".home__navpage").style.visibility = "visible";
  document.querySelector(".home__navpage").style.zIndex = 100;
  document.querySelector(".home__navpage").style.opacity = "1";
  document.querySelector(".home").style.height = "850px";
  document.querySelector(".home__bar").style.visibility = "hidden";
  document.querySelector(".home__bar--close").style.display = "block";
  document.querySelector(".home__navpage").style.top = "120px";
}

function closeNavbar() {
  document.querySelector(".home__navpage").style.visibility = "hidden";
  document.querySelector(".home__navpage").style.opacity = "0";
  document.querySelector(".home__navpage").style.top = "0";
  document.querySelector(".home").style.height = "100vh";
  document.querySelector(".home__bar--close").style.display = "none";
  document.querySelector(".home__bar").style.visibility = "visible";
}

// cursor
const cursor = document.querySelector(".home__cursor");
const body = document.querySelector("body");
body.addEventListener("mousemove", cursorRun);
function cursorRun(e) {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
}
setTimeout(cursorRun(e), 5000);
