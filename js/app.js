
import { Nav } from './components/navbar.js';
import { SwiperInit } from './components/swiperinit.js';
import { Accordion } from './components/accordion.js';
import { Modal } from './components/modal.js';
import { buttons } from './components/buttons.js';
import { filters } from './components/filters.js';
import { tabs } from './components/tabs.js';


const NavInstance = new Nav();
const SwiperInstance = new SwiperInit();
const  AccordionInstance = new Accordion();
const ModalInstance = new Modal();
const ButtonsInstance = new buttons();
const CheckboxInstance = new filters();
const TabsInstance = new tabs();


document.addEventListener('DOMContentLoaded', function() {
    var faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(function(item) {
        var top = item.querySelector('.faq__item-top');
        var content = item.querySelector('.faq__item-content');
        
        top.addEventListener('click', function() {
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                var height = content.scrollHeight + 'px';
                content.style.maxHeight = height;
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});

window.addEventListener('scroll', function() {
  var decElements = document.querySelectorAll('.dec');
  var windowHeight = window.innerHeight;

  decElements.forEach(function(decElement) {
      var decPosition = decElement.getBoundingClientRect().top;

      // Проверяем, есть ли уже класс 'visible'
      var isVisible = decElement.classList.contains('visible');

      if (decPosition < windowHeight && !isVisible) {
          decElement.classList.add('visible');
          // Устанавливаем таймер на удаление класса спустя 5 секунд
          setTimeout(function() {
              decElement.classList.remove('visible');
          }, 4000); // 5000 миллисекунд = 5 секунд
      } else if (decPosition >= windowHeight && isVisible) {
          decElement.classList.remove('visible');
      }
  });
});

  document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('splide')) {
        const splide = new Splide('#splide', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            autoWidth: true,
            arrows: false,
            pagination: false,
            autoScroll: {
                speed: 1,
            },
        });
        splide.mount(window.splide.Extensions);
    }

    if (document.getElementById('splide2')) {
      const splide = new Splide('#splide2', {
          type: 'loop',
          drag: 'free',
          focus: 'center',
          autoWidth: true,
          arrows: false,
          pagination: false,
          autoScroll: {
              speed: 1,
          },
      });
      splide.mount(window.splide.Extensions);
  }
});
