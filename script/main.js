
let show = true;
const menu = document.querySelector(".header__nav-wrapper");
const menuToggle = menu.querySelector(".header__menu-toggle");
const navLinks = menu.querySelectorAll(".header__link-item");

const addEvent = links => links.forEach(element => {
    element.addEventListener("click", menuResponsive);
});

const removeEvent = links => links.forEach(element => {
    element.removeEventListener("click", menuResponsive);
});

const menuResponsive = () => {
    document.body.style.overflow = show ? "hidden" : "initial";
    show ? addEvent(navLinks) : removeEvent(navLinks);
    menu.classList.toggle("header__menu-responsive-active", show);
    show = !show;
}

menuToggle.addEventListener("click", menuResponsive);
