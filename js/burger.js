const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');

burger.addEventListener('click', (e) => burgerMenu.classList.toggle('active'));
burger.style.zIndex = 100001;