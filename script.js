var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const cartItem = $(".cart-items-container");

$('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    searchBtn.classList.remove('active');
    navMedia.classList.remove('active');
}

const searchBtn = $(".search-form");

$('#search-btn').onclick = () => {
    searchBtn.classList.toggle('active');
    cartItem.classList.remove('active');
    navMedia.classList.remove('active');
}

const navMedia = $(".navbar");

$('#menu-btn').onclick = () => {
    navMedia.classList.toggle('active');
    cartItem.classList.remove('active');
    searchBtn.classList.remove('active');
}
window.onscroll = () => {
    cartItem.classList.remove('active');
    searchBtn.classList.remove('active');
    navMedia.classList.remove('active');
}












