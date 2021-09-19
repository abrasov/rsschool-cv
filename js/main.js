const menu = document.querySelector('.nav-menu');
const list = document.querySelector('.nav__list');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  list.classList.toggle('is-open');
});
list.addEventListener('click', () => {
  menu.classList.remove('active');
  list.classList.remove('is-open');
});