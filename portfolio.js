const boxLeft = document.querySelectorAll(".portfolio__common--left");
const boxRight = document.querySelectorAll(".portfolio__common--right");

if (window.innerWidth < 1198) {
  boxLeft.forEach((e) => {
    e.style.paddingRight = 20 + "px";
  });
  boxRight.forEach((e) => {
    e.style.paddingLeft = 20 + "px";
  });
}
