let profileMenu = document.getElementById("profileMenu");
let alertMenu = document.getElementById("alertMenu");

function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
    if (alertMenu.classList[1] == "open-menu"){
        alertMenu.classList.toggle("open-menu");
    }
}

function toggleAlert(){
    alertMenu.classList.toggle("open-menu");
    if (profileMenu.classList[1] == "open-menu"){
        profileMenu.classList.toggle("open-menu");
    }
}