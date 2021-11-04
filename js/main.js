let hamburger = document.querySelector(".hamburger");
let links = document.querySelector(".links--wrap");

hamburger.addEventListener("click", () => {
    links.classList.toggle("display");
});
