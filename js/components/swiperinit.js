export class SwiperInit {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.querySelector('.main-section__slider')) {
        const solutions = new Swiper('.main-section__slider', {
          slidesPerView: 1,
          spaceBetween: 0, 
          initialSlide: 0,
          autoplay: { 
            delay: 5000, 
            disableOnInteraction: false,
          },
          speed: 1100,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }


      if (document.querySelector('.ready-sets__slider')) {
        const readysets = new Swiper('.ready-sets__slider', {
          spaceBetween: 1,
          grabCursor: true,
          slidesPerView: 5,
          roundLengths: true,
          loop: true,
        });
      }

      if (document.querySelector('.likeit__slider')) {
        const readysets = new Swiper('.likeit__slider', {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          slideToClickedSlide: true,
          loop: true,
          coverflowEffect: {
            rotate: 0,
            stretch: -100,
            depth: 336,
            modifier: 1,
            slideShadows: false
          }
        });
      }

      if (document.querySelector('.drum-slider')) {
        const drum = new Swiper('.drum-slider', {
          effect: 'coverflow',
          direction: 'vertical',
          loop: true,
          slideToClickedSlide: true,
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 3,
          initialSlide: 1,
          coverflowEffect: {
            rotate: -40,
            stretch: 1,
            depth: 1,
            modifier: 1,
            slideShadows: false
          },
          freeMode:false,
          freeModeSticky:true
        });
      }
              
              // Здесь можно добавить дополнительный функционал, если необходимо
              
            });
          }
        } 