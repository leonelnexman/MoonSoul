export class Accordion {
    constructor() {
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
    }
  }
