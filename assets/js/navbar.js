navBar = document.querySelector(".nav");
navLinks = document.querySelector(".nav-links");
toggleButton = document.querySelector(".nav-toggle-button");

toggleButton.onclick = () => {
  navBar.classList.toggle("nav-active");
  navLinks.classList.toggle("nav-link-active");
  toggleButton.classList.toggle("toggle-active");
};
