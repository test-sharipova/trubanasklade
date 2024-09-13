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
        padding: 0,
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