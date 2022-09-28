// hamburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// hamburger 
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// selection of nav
const navLink = document.querySelectorAll(".nav-link");

// closing menu when link's clicked
navLink.forEach((link) =>
    link.addEventListener("click", () => { 
        ul.classList.remove("show");
    })
);