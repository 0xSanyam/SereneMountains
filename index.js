const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close");
const navMenu = document.querySelector("nav");

if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
        navMenu.classList.add("open-navigation");
    });
}

if (closeButton) {
    closeButton.addEventListener("click", () => {
        navMenu.classList.remove("open-navigation");
    });
}
