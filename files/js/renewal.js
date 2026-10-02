'use strict';
document.querySelectorAll('[data-slide]').forEach(button => {
  button.addEventListener('click', () => {
    const slideshow = document.querySelector('[uk-slideshow]');
    if (slideshow && window.UIkit) UIkit.slideshow(slideshow).show(button.dataset.slide);
  });
});
const menu = document.querySelector('.renew-mobile-nav');
if (menu) {
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', event => {
    if (!menu.contains(event.target)) menu.open = false;
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
}
