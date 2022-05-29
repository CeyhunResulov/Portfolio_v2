// // text typs
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

// show projects

const projects = document.querySelector(".home__reset");
const projectsBox = document.querySelector(".home__container--pro");
const reset = document.querySelector(".home__container--pro i");
const portrait = document.querySelector(".home__container--portrait");
const pro = document.querySelector(".home__container--pro");
projects.addEventListener("click", showProjects);
reset.addEventListener("click", hiddenProjects);

function showProjects(e) {
  if (window.innerWidth > 720) {
    projectsBox.style.width = 500 + "px";
  } else {
    pro.style.animation = "project 1s ease forwards";
  }
}

function hiddenProjects(e) {
  projectsBox.style.width = "0";
  if (window.innerWidth < 720) {
    pro.style.animation = "backpro 1s ease forwards";
  }
}
