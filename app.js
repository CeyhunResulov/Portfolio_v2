// text typs
let z = 0;
let e = 0;
let a = -1;
let x = 0;
function firstText(textFirst) {
  z += 1;
  a = a + 1;
  if (a < textFirst[e].length) {
    document.querySelector(".home__about--first").innerHTML += textFirst[e][a];
  } else {
    x += 1;
    let textList = [];
    for (let i = 0; i < textFirst[e].length - x; i++) {
      c = textFirst[e][i];
      textList.push(c);
    }
    textList.pop();
    let y = "";
    for (let i = 0; i < textFirst[e].length - x; i++) {
      y += textFirst[e][i];
    }
    document.querySelector(".home__about--first").innerHTML = y;
  }
  if (x >= textFirst[e].length) {
    if (z > textFirst[e].length && z < 3 * textFirst[e].length) {
      a = -1;
      x = 0;
      e = 1;
    }
    if (z > 2 * textFirst[e].length && z < 4 * textFirst[e].length) {
      a = -1;
      x = 0;
      e = 2;
    }
    if (z > 5 * textFirst[e].length) {
      a = -1;
      x = 0;
      e = 0;
      z = 0;
    }
  }
}

setInterval(firstText, 100, [
  "I Love Wordpress  ",
  "I Develop Front-End  ",
  "I Code Cool Website  ",
]);

// get navbar

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

// show projects

const projects = document.querySelector(".home__reset");
const projectsBox = document.querySelector(".home__container--pro");
const reset = document.querySelector(".home__container--pro i");
const portrait = document.querySelector(".home__container--portrait");
const pro = document.querySelector(".home__container--pro");
const footer = document.querySelector(".home__desc");
projects.addEventListener("click", showProjects);
reset.addEventListener("click", hiddenProjects);

function showProjects(e) {
  if (window.innerWidth > 720) {
    projectsBox.style.width = 500 + "px";
  } else {
    pro.style.animation = "project 1s ease forwards";
    footer.style.marginTop = "200px";
  }
}

function hiddenProjects(e) {
  projectsBox.style.width = 0;
  if (window.innerWidth < 720) {
    pro.style.animation = "backpro 1s ease forwards";
  }
}
