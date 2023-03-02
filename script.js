// Mobile menu
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector("#header-nav");
const overlay = document.querySelector(".overlay");
function openNav() {
  overlay.style.height = "100%";
  openMenu.classList.add("active");
  closeMenu.classList.add("active");
  nav.classList.add("active");
}
function closeNav() {
  overlay.style.height = "0%";
  openMenu.classList.remove("active");
  closeMenu.classList.remove("active");
  nav.classList.remove("active");
}

// Testimonial slides
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-container");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
