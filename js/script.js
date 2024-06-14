let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}