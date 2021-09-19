$(function(){
  
  $('.team-slider').slick({
    fade: true,
    prevArrow: '<img class="slider-arr slider-arr-left" src="images/slider-arr-left.svg" alt="">',
    nextArrow: '<img class="slider-arr slider-arr-right" src="images/slider-arr-right.svg" alt=""></img>',
    autoplay: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        }
      }
    ]

  });

  $('.fabrication-slider').slick({
    fade: true,
    autoplay: 3000,
    prevArrow: '<img class="slider-arr slider-arr-left" src="images/slider-arr-left.svg" alt="">',
    nextArrow: '<img class="slider-arr slider-arr-right" src="images/slider-arr-right.svg" alt=""></img>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]

  })


  $('.materials-slider').slick({
    fade: true,
    autoplay: 3000,
    prevArrow: '<img class="slider-arr slider-arr-left" src="images/slider-arr-left.svg" alt="">',
    nextArrow: '<img class="slider-arr slider-arr-right" src="images/slider-arr-right.svg" alt=""></img>',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]

  })

  // нажатие на слово переключает слайды ниже

  $('.materials-nav__item-text--0').addClass('active');

  $('.materials-nav__item-text').on('click', function(e) {

    let siblings = $(this).parent().siblings().children();

    if ( $(this).hasClass('materials-nav__item-text--0') ) {

      for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('active');
      }

      $('.materials-nav__item-text--0').addClass('active');
      $('.materials-slider').slick( 'slickGoTo', 0);

    } else if ( $(this).hasClass('materials-nav__item-text--1') ) {

      for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('active');
      }

      $('.materials-nav__item-text--1').addClass('active');
      $('.materials-slider').slick( 'slickGoTo', 1);

    } else if ( $(this).hasClass('materials-nav__item-text--2') ) {

      for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('active');
      }

      $('.materials-nav__item-text--2').addClass('active');
      $('.materials-slider').slick( 'slickGoTo', 2);

    } else if ( $(this).hasClass('materials-nav__item-text--3') ) {

      for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('active');
      }

      $('.materials-nav__item-text--3').addClass('active');
      $('.materials-slider').slick( 'slickGoTo', 3);

    }
  });

  // переключение по событию смены слайда до него (пролистывание по  горизонтали или щелчок по стрелкам)

  $('.materials-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){


    if ( nextSlide === 0 ) {
      let siblings = $('.materials-nav__item-text--0').parent().siblings().children();
      for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('active');
      }
      $('.materials-nav__item-text--0').addClass('active');
    }

    if ( nextSlide === 1 ) {
      let siblings = $('.materials-nav__item-text--1').parent().siblings().children();
      for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('active');
      }
      $('.materials-nav__item-text--1').addClass('active');
    }

    if ( nextSlide === 2 ) {
      let siblings = $('.materials-nav__item-text--2').parent().siblings().children();
      for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('active');
      }
      $('.materials-nav__item-text--2').addClass('active');
    }

    if ( nextSlide === 3 ) {
      let siblings = $('.materials-nav__item-text--3').parent().siblings().children();
      for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('active');
      }
      $('.materials-nav__item-text--3').addClass('active');
    }
  });

  // опрос по подбору стола

  $('.personal__btn').on('click', function(e) {

    let checked = false;

    if ( $('.personal__test--1').hasClass('active') ) {

      $('.personal__item-checkbox--1').each(function (i, elem) {
        if ( $(elem).prop("checked") ) {
          checked = true;
        }
      })
    } else if ( $('.personal__test--2').hasClass('active') ) {

      $('.personal__item-checkbox--2').each(function (i, elem) {
        if ( $(elem).prop("checked") ) {
          checked = true;
        }
      })
    } else if ( $('.personal__test--3').hasClass('active') ) {
      $('.personal__item-checkbox--3').each(function (i, elem) {
        if ( $(elem).prop("checked") ) {
          checked = true;
        }
      })
    };

    if ( $('.personal__test--1').hasClass('active') && checked ) {

      $('.personal__remaining-line--2').addClass('passed');
      $('.personal__remaining-text').html('Осталось вопросов 1 из 3')
      $('.personal__test--1').removeClass('active');
      $('.personal__test--2').addClass('active');

    } else if ( $('.personal__test--2').hasClass('active') && checked ) {

      $('.personal__remaining-line--3').addClass('passed')
      $('.personal__remaining-text').html('Осталось вопросов 0 из 3')
      $('.personal__test--2').removeClass('active');
      $('.personal__test--3').addClass('active');
    } else if ( $('.personal__test--3').hasClass('active') == false || checked == false ) {
      
      checked = false
      e.preventDefault();

    }
  });

  // опрос посетителя с обработкой пустых радио-кнопок

  $('.greet__survey-btn').on('click', function(e) {

    let checked = false;

    if ( $('.greet__survey-body--1').hasClass('active') ) {

      $('.greet__survey-radio--1').each(function (i, elem) {
        if ( $(elem).prop("checked") ) {
          checked = true;
        }
      })
    } else if ( $('.greet__survey-body--2').hasClass('active') ) {

      $('.greet__survey-radio--2').each(function (i, elem) {
        if ( $(elem).prop("checked") ) {
          checked = true;
        }
      })
    } else if ( $('.greet__survey-body--3').hasClass('active') ) {
      $('.greet__survey-radio--3').each(function (i, elem) {
        if ( $(elem).prop("checked") ) {
          checked = true;
        }
      })
    };

    if( $('.greet__survey-body--1').hasClass('active') && checked ) {

      $('.greet__survey-body--1').removeClass('active');
      $('.greet__survey-body--2').addClass('active');
      checked = false

    } else if( $('.greet__survey-body--2').hasClass('active') && checked ) {

      $('.greet__survey-body--2').removeClass('active');
      $('.greet__survey-body--3').addClass('active');
      checked = false

    } else if( $('.greet__survey-body--3').hasClass('active') == false || checked == false ) {

      checked = false
      e.preventDefault();
    }
  });

  // появление мобильного меню

  $('.header__btn').on('click', function(e) {
    $('.header__btn').toggleClass('active');
    $('.mob-menu').toggleClass('active');
    $('body').toggleClass('lock')
    $('html').toggleClass('lock')
  })

  new WOW().init();

});