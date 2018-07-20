var bgMenu = document.querySelector('.nav__burger');

bgMenu.addEventListener("click", function(evt){
  var bgMenuLine = bgMenu.querySelector('.nav__burger-line'),
        menuMobile = document.querySelector('.nav__list'),
        phoneMobile = document.querySelector('.nav__item-phone'),
        body = document.querySelector('body');
  evt.preventDefault();
  console.log('Кнопка Меню');
  bgMenuLine.classList.toggle("nav__burger-line--open");
  bgMenu.classList.toggle("nav__burger--open");
  phoneMobile.classList.toggle("nav__item-phone--open");
  menuMobile.classList.toggle("nav__list--mobile");
  body.classList.toggle("overflow");

});
