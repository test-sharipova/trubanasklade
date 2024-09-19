//menu 
const menu = document.querySelector('.header__menu__wrapper'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger'),
    menuClose = document.querySelector('.menu__close'),
    overlay = document.querySelector('.overlay'),
    phones = document.querySelector('.header__phones__icon'),
    phonesContent = document.querySelector('.header__phones'),
    phonesClose = document.querySelector('.phones__close'),
    body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
      overlay.style.display = 'block';
      menu.classList.add('header__menu__wrapper_active');
      body.classList.add('body-fixed');
    });
    menuClose.addEventListener('click', () => {
      menu.classList.remove('header__menu__wrapper_active');
      overlay.style.display = 'none';
      body.classList.remove('body-fixed');
  });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
          overlay.style.display = 'none';
            menu.classList.toggle('header__menu__wrapper_active');
            body.classList.remove('body-fixed');
        });
    });

//показать-скрыть телефоны моб версия
    phones.addEventListener('click', () => {
      overlay.style.display = 'block';
      phonesContent.classList.add('header__phones_active');
      body.classList.add('body-fixed');
    });

    phonesClose.addEventListener('click', () => {
      phonesContent.classList.remove('header__phones_active');
      overlay.style.display = 'none';
      body.classList.remove('body-fixed');
    });


//каталог труб
//показать каталог труб
$('.header__catalog__btn').on('click', function(){
  $('.header__catalog__list').toggleClass('header__catalog__list_active');
  $('body').toggleClass('body-fixed');
});
$('.hamburger, .header__phones__icon').on('click', function() {
  $('.header__catalog__list').removeClass('header__catalog__list_active');
});

//показать субкаталог
$('.header__catalog-show').on('click', function(){
  $('.header__catalog__list__sublist').toggleClass('header__catalog__list__sublist_active');
  
});


//прикрепить чертеж
var dt = new DataTransfer();

$('.input-file input[type=file]').each(function(){
  $(this).on('change', function(){
    let $files_list = $(this).closest('.input-file').next();
    $files_list.empty();
  
    for(var i = 0; i < this.files.length; i++){
      let new_file_input = '<div class="input-file-list-item">' +
        '<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
        '<div class="input-file-list-remove"></div>' +
        '</div>';
      $files_list.append(new_file_input);
      dt.items.add(this.files.item(i));
    };
    this.files = dt.files;
      $('.btn_file').fadeOut();
  });
});
$("body").on('click', '.input-file-list-remove', function(i) {
  $('.input-file-list-item').remove();
  $('.btn_file').fadeIn();
});

//слайдер о компании счетчик слайдов
var $slider = $('.about__slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('about__slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + ' из ' +slidesCount);
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}

//слайдер с видео
$('.video__slider').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        // centerMode: true,
        arrows: false,
        // centerPadding: '20px',
        
      }
    },    
  ]

});

//слайдер с отзывами
$('.rew__slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        
      }
    },  
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // centerMode: true,
        arrows: false,
        // centerPadding: '20px',
        
      }
    },     
  ]
});

//показать больше кейсов
var visibleBlocks = 2;
var allBlocks = $('.cases__item').length;
        
$('.cases__item').slice(visibleBlocks).hide();
         
$('.btn-show-cases').on('click', function() {
  visibleBlocks += 2;
           
   if (visibleBlocks >= allBlocks) {
     $('.btn-show-cases').hide();
   }
            
   $('.cases__item').slice(0, visibleBlocks).show();
});

//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}

//табы в контактах
$(function() {
  
  $('ul.contacts__tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.contacts__tabs').find('div.contacts__tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});

$('.footer__title').each(function(i) {
  $(this).on('click', function() {
    $('.footer__menu').eq(i).toggleClass('footer__menu_active');
  });
});