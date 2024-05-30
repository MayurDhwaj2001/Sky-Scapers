// const hamburgerContainer = document.querySelector(".hamburger-container");
// const navLinks = document.querySelector(".nav-links");
// const navLink = document.querySelectorAll(".remove");

// const handleLinkClick = () => {
//   hamburgerContainer.classList.remove("active");
//   navLinks.classList.remove("nav-active");
// };

// hamburgerContainer.addEventListener("click", () => {
//   hamburgerContainer.classList.toggle("active");
//   navLinks.classList.toggle("nav-active");
// });

// navLink.forEach((link) => {
//   link.addEventListener("click", handleLinkClick);
// });

// JavaScript
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
  hamburger.classList.toggle("toggle");
});

// scripts.js
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-90px"; // Hide the navbar
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// Navbar End
//

// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
