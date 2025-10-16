const menu = document.querySelector('[data-menu]');
const menuBtn = document.querySelector('[data-menu-btn]');
const links = document.querySelectorAll('[data-mobile-link]');

const handleMenu = () => {
  menu.classList.toggle('is-open');
  menuBtn.classList.toggle('is-open');
};
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuBtn.classList.remove('is-open');
  });
});

menuBtn.addEventListener('click', handleMenu);
