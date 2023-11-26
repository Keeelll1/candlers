const menuBtn = document.querySelector('.menu-btn'),
  menuMobile = document.querySelector('.header-menu-list')

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-open')
})

const swiper = new Swiper('.feedback-slider', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    }
  });