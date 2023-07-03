const header = document.querySelector("header");
const body = document.querySelector("body");
const burgerButton = document.querySelector(".burger_menu");
const menu = document.querySelector(".nav");
const overlay = document.querySelector('.overlay');

burgerButton.addEventListener("click", function(event) {
    header.classList.toggle('open');
    body.classList.toggle('no_scroll');
    overlay.classList.toggle('add');
    event.stopPropagation();
})

document.body.addEventListener('click', function(event) {
    if (event.target === menu) return;
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        body.classList.remove('no_scroll');
        overlay.classList.remove('add');
    }
});