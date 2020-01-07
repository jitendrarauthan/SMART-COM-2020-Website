const navSlide = function() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const body = document.querySelector('body');
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    /*Toggle Nav*/
    nav.classList.toggle("nav-active");
    body.classList.toggle("nav-body");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
    /*Burger Animation*/
    burger.classList.toggle("toggle");
  });
};
navSlide();
