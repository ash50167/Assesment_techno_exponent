// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileMenu = document.querySelector(".mobile_menu");
    const menuCross = document.querySelector(".menu-cross");

    mobileMenuIcon.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });
    menuCross.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove("active");
        }
    });
});

// toggle links - mobile menu
const navLinks = document.querySelectorAll('.navbar__list li a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});