/* document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () =>{
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element =>{
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
});
 */

$(document).ready(function(){
  var modal = $('.modal'),
    modalBtn = $('[data-toggle]'),
    closeBtn = $('.modal__close');

    modalBtn.on('click', function(){
      modal.toggleClass('modal--visible')
    });
    closeBtn.on('click', function(){
      modal.toggleClass('modal--visible')
    });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  //валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userPhone: "required",
      // правило-объект
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userEmail: {
        required: true,
        email: true
      }
    }, //сообщения
    messages: {
      userName: {
        required: "*Имя обязательно",
        minlength: "*Имя не короче 2-х букв",
        maxlength: "*Имя не длинее 15-ти букв"
      },
      userPhone: "*Телефон обязателен",
      userEmail: {
        required: "*Обязательно укажите email",
        email: "*Введите в формате: name@domain.com"
      }
    }
  });

  //маска для телефона
  $('[type=tel]').mask(' +7 (000) 000 - 00 - 00', {placeholder: " +7 (___) ___ - __ - __"});
});
