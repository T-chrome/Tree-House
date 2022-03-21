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

// カルーセル
$('.slick').slick({
  autoplay: true,
  dots: true,
  autoplaySpeed: 3000,
  speed: 1000,
  pauseOnHover: false,
  arrows: false,
  zindex: -1,
});
