export class SwiperInit {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.querySelector('.main-section__slider')) {
        const solutions = new Swiper('.main-section__slider', {
          slidesPerView: 1,
          spaceBetween: 0, 
          initialSlide: 0,
          // autoplay: { 
          //   delay: 7000, 
          //   disableOnInteraction: false,
          // },
          speed: 1100,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          on: {
            slideChange: function () {
              // Получаем текущий активный слайд
              const activeSlide = this.slides[this.activeIndex];
              
              // Получаем все видео в текущем слайде
              const videos = activeSlide.querySelectorAll('video');
      
              // Проходимся по всем найденным видео и запускаем их воспроизведение
              videos.forEach(video => {
                video.play();
              });
      
              // Проверяем, является ли текущий слайд третьим или шестым
              if (this.activeIndex === 2 || this.activeIndex === 5) {
                // Добавляем класс "green-header" к элементу с классом "header"
                document.querySelector('.header').classList.add('green-header');
              } else {
                // Если текущий слайд не третий или шестой, удаляем класс "green-header" из элемента с классом "header"
                document.querySelector('.header').classList.remove('green-header');
              }
            }
          }
        });
      }
      


      if (document.querySelector('.ready-sets__slider')) {
        const readysets = new Swiper('.ready-sets__slider', {
          spaceBetween: 1,
          grabCursor: true,
          slidesPerView: 5,
          roundLengths: true,
          loop: true,
          // freeMode: true,
          // watchSlidesProgress: true,
          breakpoints: {
            300: {
              slidesPerView: 'auto',
              initialSlide: 0,
              centerInsufficientSlides: true,
              freeMode: true,
              roundLengths: false,
              spaceBetween: 10,
              // loop: false,
              // freeModeSticky: true,
              // snap: {
              //   snapToSlides: true,
              // },
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 1,
            },
          }
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

      if (document.querySelector('.mySwiper')) {
        const mainthumb = new Swiper('.mySwiper', {
          spaceBetween: 0,
          slidesPerView: 3,
          freeMode: true,
          watchSlidesProgress: true,
        });
      
        if (document.querySelector('.mySwiper2')) {
          const thumbs = new Swiper('.mySwiper2', {
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: mainthumb,
            },
          });
        }
      }

     

      if (document.querySelector('.reviews__slider')) {
        const reviews = new Swiper('.reviews__slider', {
          slidesPerView: 4,
          spaceBetween: 27,
        });
      }

              
              // Здесь можно добавить дополнительный функционал, если необходимо
              
            });
          }
        } 