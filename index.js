// Toggle hamburger btn
const headerToggle = document.querySelector(".header-toggle");
const body = document.querySelector("body");
const navItem = document.querySelectorAll(".nav-item");

const toggleMobileMenu = function () {
  if (headerToggle.classList.contains("open")) {
    headerToggle.classList.remove("open");
    body.classList.remove("overflow");
  } else {
    headerToggle.classList.add("open");
    body.classList.add("overflow");
  }
};

headerToggle.addEventListener("click", toggleMobileMenu);

function myFunction() {
  if (mediaQuery.matches) {
    // If media query matches
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].addEventListener("click", toggleMobileMenu);
    }
  } else {
  }
}

const mediaQuery = window.matchMedia("(max-width: 1100px)");
myFunction(mediaQuery); // Call listener function at run time
mediaQuery.addListener(myFunction); // Attach listener function on state changes
