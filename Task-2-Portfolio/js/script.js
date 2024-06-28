// script.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleBar = document.querySelector(".toggleBar");
    const navbarLinks = document.querySelector(".navbar ul");

    toggleBar.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
    });
});
