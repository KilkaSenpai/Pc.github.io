$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 10
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });
  $('.icon-th-list').on('click', function () {
    $('.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
  });

  $('.icon-th-large').on('click', function () {
    $('.product__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
  $('input[type="file"], select').styler();

  var mixer = mixitup('.products__inner-box');

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });
});
   function slowScroll(id) {
     var offset = 0;
     $('html,body').animate({
       scrollTop: $(id).offset().top - offset
     },1000);
     return false;
   }