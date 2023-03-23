navBar = document.querySelector(".nav");
navLinks = document.querySelector(".nav-links");
toggleButton = document.querySelector(".nav-toggle-button");

toggleButton.onclick = () => {
  navBar.classList.toggle("nav-active");
  navLinks.classList.toggle("nav-link-active");
  toggleButton.classList.toggle("toggle-active");
};

document.addEventListener("mouseup", (e) => {
  if (!navBar.contains(e.target)) {
    if (toggleButton.classList.contains("toggle-active")) {
      console.log("Yes")
      navBar.classList.toggle("nav-active");
      navLinks.classList.toggle("nav-link-active");
      toggleButton.classList.toggle("toggle-active");
    }
  }
});