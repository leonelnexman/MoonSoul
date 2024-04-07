
import { Nav } from './components/navbar.js';
import { SwiperInit } from './components/swiperinit.js';
import { Accordion } from './components/accordion.js';
import { Modal } from './components/modal.js';
import { buttons } from './components/buttons.js';
import { filters } from './components/filters.js';
import { tabs } from './components/tabs.js';
import { Cursor } from './components/cursor.js';


const NavInstance = new Nav();
const SwiperInstance = new SwiperInit();
const  AccordionInstance = new Accordion();
const ModalInstance = new Modal();
const ButtonsInstance = new buttons();
const CheckboxInstance = new filters();
const TabsInstance = new tabs();
const CursorInstance = new Cursor();

document.addEventListener("DOMContentLoaded", function() {
    const filterButton = document.querySelector(".catalog__filters-open");
    const filters = document.querySelector(".filters");

    if (filterButton && filters) {
        filterButton.addEventListener("click", function() {
            filters.classList.toggle("active");
            filterButton.classList.toggle("open");
            if (filters.classList.contains("active")) {
                filterButton.textContent = "Закрыть фильтры";
            } else {
                filterButton.textContent = "Открыть фильтры";
            }
            updateMaxHeight();
        });
    }

    function updateMaxHeight() {
        const activeFilters = document.querySelector(".filters.active");
        const filters = document.querySelector(".filters");
        if (activeFilters) {
            filters.style.maxHeight = activeFilters.scrollHeight + "px";
        } else {
            filters.style.maxHeight = null;
        }
    }

    // Обновить высоту при изменении размеров окна
    window.addEventListener("resize", updateMaxHeight);
});

$('.advantages__img-img').ripples({
    resolution: 256,
    dropRadius: 20,
    perturbance: 0.04
});

document.addEventListener('DOMContentLoaded', function() {
    const filtersSelectTops = document.querySelectorAll('.filters__select-top');

    filtersSelectTops.forEach(function(selectTop) {
        selectTop.addEventListener('click', function() {
            const select = this.closest('.filters__select');
            if (select) {
                select.classList.toggle('active');

                const content = select.querySelector('.filters__select-content');
                if (content) {
                    if (select.classList.contains('active')) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        content.style.maxHeight = '0';
                    }
                }
            }
        });
    });
});

$(function() {
    const cssClasses = [
      'rangeslider--is-lowest-value',
      'rangeslider--is-highest-value'
    ];

    const rangeInputs = document.querySelectorAll('input[type=range]');
    if (rangeInputs.length > 0) {
        rangeInputs.forEach(function(input) {
            $(input)
                .rangeslider({
                    polyfill: false
                })
                .on('input', function() {
                    const fraction = (this.value - this.min) / (this.max - this.min);
                    if (fraction === 0) {
                        this.nextSibling.classList.add(cssClasses[0]);
                    } else if (fraction === 1) {
                        this.nextSibling.classList.add(cssClasses[1]);
                    } else {
                        this.nextSibling.classList.remove(...cssClasses);
                    }
                });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
        const advantagesItems = document.querySelectorAll('.advantages__item');
    
        advantagesItems.forEach((advantageItem, index) => {
            const advantageItemTop = advantageItem.querySelector('.advantages__item-top');
            const content = advantageItem.querySelector('.advantages__item-content');
    
            if (index === 0) {
                advantageItem.classList.add('active');
                const paddingTop = parseInt(window.getComputedStyle(content).paddingTop);
                const paddingBottom = parseInt(window.getComputedStyle(content).paddingBottom);
                const contentHeight = content.scrollHeight + paddingTop + paddingBottom;
                content.style.maxHeight = contentHeight + 'px';
            }
    
            advantageItemTop.addEventListener('click', () => {
                const isActive = advantageItem.classList.contains('active');
                const activeItems = document.querySelectorAll('.advantages__item.active');
    
                if (!isActive) {
                    activeItems.forEach(activeItem => {
                        activeItem.classList.remove('active');
                        const activeContent = activeItem.querySelector('.advantages__item-content');
                        activeContent.style.maxHeight = null;
                    });
                }
    
                advantageItem.classList.toggle('active');
    
                if (!isActive) {
                    const paddingTop = parseInt(window.getComputedStyle(content).paddingTop);
                    const paddingBottom = parseInt(window.getComputedStyle(content).paddingBottom);
                    const contentHeight = content.scrollHeight + paddingTop + paddingBottom;
                    content.style.maxHeight = contentHeight + 'px';
                } else {
                    content.style.maxHeight = null;
                }
            });
        });
    });


document.addEventListener('DOMContentLoaded', function() {
    const headerMain = document.querySelector('.header-main');

    setTimeout(function() {
        headerMain.style.opacity = '1';
        headerMain.style.visibility = 'visible';
    }, 1700);
});

document.addEventListener('DOMContentLoaded', function() {
    const headerMain = document.querySelector('.main-section__slide-main');

    setTimeout(function() {
        headerMain.style.opacity = '1';
        headerMain.style.visibility = 'visible';
    }, 1700);
});


var animateButton = function(e) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    },700);
};

var bubblyButtons = document.querySelectorAll(".bubbly-button, .bubbly-button-green");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}


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

  if (document.getElementById('splide3')) {
    const splide = new Splide('#splide3', {
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
