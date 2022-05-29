// navbar open and close
function openNavbar() {
  document.querySelector(".home__navpage").style.visibility = "visible";
  document.querySelector(".home__navpage").style.zIndex = 100;
  document.querySelector(".home__navpage").style.opacity = "1";
  document.querySelector(".home").style.height = "850px";
  document.querySelector(".home__bar").style.visibility = "hidden";
  document.querySelector(".home__bar--close").style.display = "block";
  document.querySelector(".home__navpage").style.top = "120px";
  document.querySelector(".all__page").style.display = "none";
}

function closeNavbar() {
  document.querySelector(".home__navpage").style.visibility = "hidden";
  document.querySelector(".home__navpage").style.opacity = "0";
  document.querySelector(".home__navpage").style.top = "0";
  document.querySelector(".home").style.height = "100vh";
  document.querySelector(".home__bar--close").style.display = "none";
  document.querySelector(".home__bar").style.visibility = "visible";
  document.querySelector(".all__page").style.display = "flex";
}

// cursor
const cursor = document.querySelector(".home__cursor");
if (window.innerWidth > 1198) {
  document.querySelector(".home__cursor").style.display = "block";
  document.addEventListener("mousemove", cursorRun);
  function cursorRun(e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY + scrollY}px`;
  }
} else {
  document.querySelector(".home__cursor").style.display = "none";
}

const navbar = document.querySelectorAll(".home__item");
const links = document.querySelectorAll("a");
navbar.forEach((li) => {
  li.addEventListener("mouseover", toEnlargeCursor);
  li.addEventListener("mouseleave", toShrinkCursor);
});
links.forEach((li) => {
  li.addEventListener("mouseover", toEnlargeCursor);
  li.addEventListener("mouseleave", toShrinkCursor);
});

function toEnlargeCursor(e) {
  cursor.classList.add("home__cursor--hover");
}
function toShrinkCursor(e) {
  cursor.classList.remove("home__cursor--hover");
}

// buttons hover

const buttons = document.querySelectorAll(".button");
const buttonsHover = document.querySelectorAll(".button__hover");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", buttonsHoverShow);

  function buttonsHoverShow(e) {
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;
    button.firstElementChild.style.top = offsetY + "px";
    button.firstElementChild.style.left = offsetX + "px";

    document.querySelector(".home__cursor").style.display = "none";

    button.firstElementChild.style.transition = "all ease .1s";
    button.firstElementChild.addEventListener("transitionend", () => {
      button.firstElementChild.style.transition = "all ease .7s";
      button.firstElementChild.style.transform = "scale(600,600)";
    });
  }

  button.addEventListener("mouseleave", buttonsHoverStop);

  function buttonsHoverStop(e) {
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;
    button.firstElementChild.style.top = offsetY + "px";
    button.firstElementChild.style.left = offsetX + "px";
    document.querySelector(".home__cursor").style.display = "block";
    button.firstElementChild.style.transition = "all ease .1s";
    button.firstElementChild.addEventListener("transitionend", () => {
      button.firstElementChild.style.transition = "all ease .7s";
      button.firstElementChild.style.transform = "scale(1)";
    });
  }
});

// when scroll window head bar

const headNavbar = document.querySelector(".home__head");

window.addEventListener("scroll", navbarSroll);

function navbarSroll() {
  if (window.scrollY > 100) {
    headNavbar.style.top = 0 + "px";
    headNavbar.style.height = 100 + "px";
    headNavbar.style.backgroundColor = "rgb(16, 16, 16)";
  } else {
    headNavbar.style.top = 50 + "px";
    headNavbar.style.height = 40 + "px";
    headNavbar.style.background = "none";
  }
}

// open website

const centerBox = document.querySelector(".center__box");
centerBox.style.height = 0 + "%";
centerBox.style.borderBottom = "none";

document.addEventListener("DOMContentLoaded", test);

function test() {
  document.querySelector(".home").style.opacity = 1;
  centerBox.style.height = 100 + "%";
}
