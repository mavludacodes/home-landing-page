let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.001, // visible part in viewport
};

const element = document.getElementById("countries-section");
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && entries[0].intersectionRatio >= 0.001) {
    element.classList.add("back-in-down");
  }
}, options);

observer.observe(element);

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}
