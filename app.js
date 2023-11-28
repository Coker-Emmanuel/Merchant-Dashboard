let profileMenu = document.getElementById("profileMenu");
let alertMenu = document.getElementById("alertMenu");
let menuOne = document.getElementById("menuOne");
let menuTwo = document.getElementById("menuTwo");
let menuThree = document.getElementById("menuThree");
let menuFour = document.getElementById("menuFour");
let menuFive = document.getElementById("menuFive");
let indicatorBar = document.getElementById("indicatorBar");
let guideDropdown = document.getElementById("guideDropdown");

// guidedropdown function
function toggleGuide(){
    guideDropdown.classList.toggle("open-guide");
}
// progressbar function
function triggerOne(){
    indicatorBar.classList.toggle("instanceOne");
}
function triggerTwo(){
    indicatorBar.classList.toggle("instanceTwo");
}
function triggerThree(){
    indicatorBar.classList.toggle("instanceThree");
}
function triggerFour(){
    indicatorBar.classList.toggle("instanceFour");
}
function triggerFive(){
    indicatorBar.classList.toggle("instanceFive");
}
// profilemenu function
function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
    if (alertMenu.classList[1] == "open-menu"){
        alertMenu.classList.toggle("open-menu");
    }
}
// notificationmenu function
function toggleAlert(){
    alertMenu.classList.toggle("open-menu");
    if (profileMenu.classList[1] == "open-menu"){
        profileMenu.classList.toggle("open-menu");
    }
}
// accordionmenu select function
function toggleAtwo(){
    menuOne.classList.toggle("open-menu");
    if (menuFive.classList[1] == "open-menu"){
        menuFive.classList.toggle("open-menu");
    }
    if (menuTwo.classList[1] == "open-menu"){
        menuTwo.classList.toggle("open-menu");
    }
    if (menuThree.classList[1] == "open-menu"){
        menuThree.classList.toggle("open-menu");
    }
    if (menuFour.classList[1] == "open-menu"){
        menuFour.classList.toggle("open-menu");
    }
}
function toggleAthree(){
    menuTwo.classList.toggle("open-menu");
    if (menuOne.classList[1] == "open-menu"){
        menuOne.classList.toggle("open-menu");
    }
}
function toggleAfour(){
    menuThree.classList.toggle("open-menu");
    if (menuTwo.classList[1] == "open-menu"){
        menuTwo.classList.toggle("open-menu");
    }
}
function toggleAfive(){
    menuFour.classList.toggle("open-menu");
    if (menuThree.classList[1] == "open-menu"){
        menuThree.classList.toggle("open-menu");
    }
}
function toggleAsix(){
    menuFive.classList.toggle("open-menu");
    if (menuFour.classList[1] == "open-menu"){
        menuFour.classList.toggle("open-menu");
    }
}

// progressbar function2
function changeProgress(){
    document.getElementById("progressChange").innerHTML="1/5 completed";

}
function changeProgresstwo(){
    document.getElementById("progressChange").innerHTML="2/5 completed";

}
function changeProgressthree(){
    document.getElementById("progressChange").innerHTML="3/5 completed";

}
function changeProgressfour(){
    document.getElementById("progressChange").innerHTML="4/5 completed";

}
function changeProgressfive(){
    document.getElementById("progressChange").innerHTML="5/5 completed";

}
