const burger = document.getElementById("burger-icon")
const navList = document.getElementsByClassName('header__nav-list')[0];

burger.addEventListener('click', () => {
    console.log("berhasil")
    if (navList.style.visibility == "visible") {
    navList.style.visibility = "hidden";
    burger.classList.replace("fa-xmark", "fa-bars");
    } else {
    navList.style.visibility = "visible";
    burger.classList.replace("fa-bars", "fa-xmark");
}});