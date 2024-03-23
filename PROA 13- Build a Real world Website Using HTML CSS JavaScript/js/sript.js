'use strick';

// adicionando evento a multiplos elementos

const addEventOnElement = function (elements, evetType, callback){
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(evetType, callback);
    }
}

// Navbar toggle for mobile

const navbar = document.querySelector("[data-overlay]");
const navToggleBtn = document.querySelector("[data-overlay]");
const overlay = document.querySelector("[data-overlay]");
const toggleNavbar = function (){
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);

// Parallax effect

const ParallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event => {
    for (let i = 0; len = ParallaxElements.length; i < len; i++) {

        const movementX = (event.clientX / window.innerWidth) * Number 
        (ParallaxElements[i].dataset.parallaxSpeed);
        const movementY = (event.clientY / window.innerHeight) * Number 
        (ParallaxElements[i].dataset.parallaxSpeed);

        ParallaxElements[i].animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, {duration: 500, fill: "forwards"});
    }
})