// ------------Script slider------------
const slider = document.querySelector(".slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnNext = document.getElementById('Siguiente');
const btnleft = document.getElementById('Atras');

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function next() {
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function left() {
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

const mediumBp = matchMedia("(max-width: 351px)");
var intervalID
const changeSize = mql => {
    mql.matches 
    ? clearInterval(intervalID) 
    : intervalID = setInterval(next, 5000);
}

btnNext.addEventListener("click", () => next());
btnleft.addEventListener("click", () => left());

mediumBp.addListener(changeSize);
changeSize(mediumBp);