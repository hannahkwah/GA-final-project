// show nav dropdown
function dropDownOne() {
    document.getElementById("resources").classList.toggle("showdropdown");
    document.getElementById("resources").classList.add("showdropdown");
    document.getElementById("highlights").classList.remove("showdropdown");
}

function dropDownTwo() {
    document.getElementById("highlights").classList.toggle("showdropdown");
    document.getElementById("resources").classList.remove("showdropdown");
    document.getElementById("highlights").classList.add("showdropdown");
}

document.getElementById("menu1").addEventListener("click", dropDownOne);
document.getElementById("menu2").addEventListener("click", dropDownTwo);

// hide nav dropdown
document.querySelector("body").addEventListener("click", function(event) {
    // console.log(event.target.tagName)
    if (event.target.tagName !== "I" && document.getElementById("resources").classList.value.includes("showdropdown")) {
        document.getElementById("resources").classList.remove("showdropdown");
    } else if (event.target.tagName !== "I" && document.getElementById("highlights").classList.value.includes("showdropdown")) {
        document.getElementById("highlights").classList.remove("showdropdown");
    }
})

// show side menu
const hamburgerMenu = document.getElementById("menu-trigger");
const closeMenu = document.getElementById("close");

function sideMenuShow() {
    document.getElementById("sidemenu").classList.add("show");
}

function sideMenuHide() {
    document.getElementById("sidemenu").classList.remove("show");
}

hamburgerMenu.addEventListener("click", sideMenuShow);

closeMenu.addEventListener("click", sideMenuHide);

// carousel
const carouselSlides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(i) {
    // hide slides
    carouselSlides.forEach(i => {
        i.style.display = "none";
    });

    // show specific slide
    carouselSlides[i].style.display = "block";
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    showSlide(currentSlide);
}

// show first slide
showSlide(currentSlide);

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);