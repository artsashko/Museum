'use strict';

document.querySelector('.burger-menu').onclick = function() {
  document.querySelector('.burger-menu__icon').classList.toggle(
    'burger-menu__icon--active');
};
