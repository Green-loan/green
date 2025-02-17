const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const mixer = mixitup(".project__grid");

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

// service container
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Show loader and success message on "Apply Now" click
document.querySelector('.apply__btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission for demonstration purposes
  
  // Show loader
  const loader = document.getElementById('loader');
  loader.style.display = 'block';
  
  // Hide form and show loader for 2 seconds
  setTimeout(() => {
    loader.style.display = 'none';
    
    // Show success popup
    const successPopup = document.getElementById('success-popup');
    successPopup.style.display = 'block';
  }, 2000);
});

// Close the success popup
function closeSuccessPopup() {
  const successPopup = document.getElementById('success-popup');
  successPopup.style.display = 'none';
}
