export class Nav {
    constructor() {
        document.addEventListener('DOMContentLoaded', function() {
            const hamburgerButton = document.querySelector('.hamburger');
            const header = document.querySelector('.header');
    
            hamburgerButton.addEventListener('click', function() {
                this.classList.toggle('active');
                header.classList.toggle('menu-active');
            });
        });
    }
}