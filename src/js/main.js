'use strict';

// ハンバーガーメニュー
function hamburger() {
  document.querySelector('body').classList.toggle('fixed');
  document.getElementById('hm').classList.toggle('is-active');
  document.getElementById('hm__bar--top').classList.toggle('is-active');
  document.getElementById('hm__bar--bottom').classList.toggle('is-active');
  document.getElementById('hm__bar--text').classList.toggle('is-active');
  document.getElementById('header__nav').classList.toggle('is-active');
  document.getElementById('header__list').classList.toggle('is-active');
  let headerItem = document.getElementsByClassName('header__item');
  for (let i = 0; i < headerItem.length; i++) {
    headerItem[i].classList.toggle('is-active');
  }
  let back = document.getElementById('hm__bar--text');
  if (back.classList.contains('is-active') == true) {
    back.innerHTML = 'back';
  } else {
    back.innerHTML = 'menu';
  }
}
document.getElementById('hm').addEventListener('click', function () {
  hamburger();
});

//スライドショー
// let nowPage = 0;
// let nextPage = 1;
// const slides = $('.top-mv__img');
// const slideLength = slides.length;
// const fadeTime = 1500;
// const showTime = 5000;

// slides.hide();

// slides.eq(nowPage).show();
// const slideshow = () => {
//   slides.eq(nextPage).fadeIn(fadeTime);
//   slides.eq(nowPage).fadeOut(fadeTime);
//   nowPage = nextPage;
//   nextPage = (nextPage + 1) % slideLength;
// };
// setInterval(slideshow, showTime);

// slick
$(function () {
  $('.slick').slick({
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  });

  $(window).scroll(function () {
    $('.js-trigger').each(function () {
      let nowScroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      let servicePoint = $(this).offset().top;
      let triggerPoint = servicePoint - windowHeight / 2;
      if (nowScroll > triggerPoint) {
        $(this).find('.js-slide').addClass('is-active');
      }
    });
  });

  // menu
  var windowSize = $(window).width();
  $('.foods').click(function () {
    if (windowSize >= 600) {
      $('.foods__list').css({
        display: 'grid',
        opacity: '1',
        transition: '0.3s',
      });
    } else if (windowSize <= 600) {
      $('.foods__list').css({
        display: 'block',
        opacity: '1',
        transition: '0.3s',
      });
    }

    $('.drinks__list,.sweets__list').css({
      display: 'none',
      opacity: '0',
      transition: '0.3s',
    });
  });

  $('.drinks').click(function () {
    if (windowSize >= 600) {
      $('.drinks__list').css({
        display: 'grid',
        opacity: '1',
        transition: '0.3s',
      });
    } else if (windowSize <= 600) {
      $('.drinks__list').css({
        display: 'block',
        opacity: '1',
        transition: '0.3s',
      });
    }

    $('.foods__list,.sweets__list').css({
      display: 'none',
      opacity: '0',
      transition: '0.3s',
    });
  });

  $('.sweets').click(function () {
    if (windowSize >= 600) {
      $('.sweets__list').css({
        display: 'grid',
        opacity: '1',
        transition: '0.3s',
      });
    } else if (windowSize <= 600) {
      $('.sweets__list').css({
        display: 'block',
        opacity: '1',
        transition: '0.3s',
      });
    }

    $('.foods__list,.drinks__list').css({
      display: 'none',
      opacity: '0',
      transition: '0.3s',
    });
  });
});
