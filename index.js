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

const pricingList = document.querySelectorAll(".pricing-list");
const pricingListHeightArray = [];

function mediaQueryFunction() {
  if (mediaQuery.matches) {
    // If media query matches
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].addEventListener("click", toggleMobileMenu);
    }
  } else {
    for (let i = 0; i < pricingList.length; i++) {
      pricingListHeightArray.push(pricingList[i].offsetHeight);
      console.log(pricingList[i].offsetHeight);
    }
    heighestElement = Math.max(...pricingListHeightArray);
    pricingList.forEach((element) => {
      element.style.height = heighestElement;
      console.log(element.offsetHeight);
    });
  }
}

const mediaQuery = window.matchMedia("(max-width: 1100px)");
mediaQueryFunction(mediaQuery); // Call listener function at run time
mediaQuery.addListener(mediaQueryFunction); // Attach listener function on state changes

function IsSafari() {
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    body.classList.add(".safari");
  }
}

IsSafari();
