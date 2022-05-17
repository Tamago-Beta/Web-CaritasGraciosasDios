// --------------variables generales--------------
const menu = document.querySelector(".menu");
const menuresponsive = document.querySelector(".menu-responsive");
const btnOpenMenu = document.querySelector(".open-menu");
const btnCloseMenu = document.querySelector(".close-menu");
const fixnavmobile = document.querySelector(".fixednavbar-mobile");


// ---------------Script fijar navegador---------------
function fixednav() {
    const navbarfixed = document.querySelector(".navbar");
    const navbarfixedmobile = document.querySelector(".topheader");
    navbarfixed.classList.toggle("fixednavbar", window.scrollY > 140);
    navbarfixedmobile.classList.toggle("fixednavbar-mobile", window.scrollY > 0);
}
window.addEventListener("scroll", fixednav);


// ---------------Script menu responsive---------------
function toggleMenu() {
    menu.classList.toggle("toggleMenu");
    menuresponsive.classList.toggle("toggleMenu");
}

btnOpenMenu.addEventListener("click", toggleMenu);
btnCloseMenu.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
            document.querySelector("a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
        }
    })
}, {rootMargin: "-30% 0px -70% 0px"});

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function() {
        menuresponsive.classList.remove("toggleMenu");
    });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
})

