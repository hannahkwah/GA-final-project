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

// filter effect
const category = document.getElementsByClassName("result");
const filterPhoto = document.getElementById("filter-photo");
const filterOral = document.getElementById("oral");
const filterAudio = document.getElementById("audio");
const filterSpeech = document.getElementById("speech");
const filterMaps = document.getElementById("maps");
const filterStraits = document.getElementById("straits");
const filterGovt = document.getElementById("govt");

filterPhoto.addEventListener("click", function() {
    filterPhoto.classList.toggle("active");
    for (let i = 0; i < category.length; i++) {
        if (category[i].classList.contains('photo')) {
            category[i].classList.toggle("result-hide");
        }
    }
});

filterOral.addEventListener("click", function() {
    filterOral.classList.toggle("active");
    for (let i = 0; i < category.length; i++) {
        if (category[i].classList.contains('oral')) {
            category[i].classList.toggle("result-hide");
        }
    }
});

filterAudio.addEventListener("click", function() {
    filterAudio.classList.toggle("active");
    for (let i = 0; i < category.length; i++) {
        if (category[i].classList.contains('audio')) {
            category[i].classList.toggle("result-hide");
        }
    }
});

filterSpeech.addEventListener("click", function() {
    filterSpeech.classList.toggle("active");
    for (let i = 0; i < category.length; i++) {
        if (category[i].classList.contains('speech')) {
            category[i].classList.toggle("result-hide");
        }
    }
});

filterMaps.addEventListener("click", function() {
    filterMaps.classList.toggle("active");
    for (let i = 0; i < category.length; i++) {
        if (category[i].classList.contains('maps')) {
            category[i].classList.toggle("result-hide");
        }
    }
});

filterStraits.addEventListener("click", function() {
    filterStraits.classList.toggle("active");
    for (let i = 0; i < category.length; i++) {
        if (category[i].classList.contains('straits')) {
            category[i].classList.toggle("result-hide");
        }
    }
});

filterGovt.addEventListener("click", function() {
    filterGovt.classList.toggle("active");
    for (let i = 0; i < category.length; i++) {
        if (category[i].classList.contains('govt')) {
            category[i].classList.toggle("result-hide");
        }
    }
});