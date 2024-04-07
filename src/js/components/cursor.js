export class Cursor {
    constructor() {
        let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree;

        document.addEventListener('DOMContentLoaded', () => {

            // Custom JS

            const body = document.querySelector('body');

            cx = window.innerWidth / 2;
            cy = window.innerHeight / 2;

            body.addEventListener('mousemove', e => {

                clientX = e.pageX;
                clientY = e.pageY;

                request = requestAnimationFrame(updateMe);

                mouseCoords(e);
                cursor.classList.remove('hidden');
                follower.classList.remove('hidden');

            });

            function updateMe() {

                dx = clientX - cx;
                dy = clientY - cy;
                tiltx = dy / cy;
                tilty = dx / cx;
                radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
                degree = radius * 12;
                gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` });

            }

            const cursor = document.getElementById('cursor');
            const follower = document.getElementById('aura');
            const links = document.querySelectorAll('a, button');
            const swiperWrappers = document.querySelectorAll('.swiper-wrapper');
            const advantagesItemTops = document.querySelectorAll('.advantages__item-top');
            const faqItemTops = document.querySelectorAll('.faq__item-top');

            mouseX = 0;
            mouseY = 0;
            posX = 0;
            posY = 0;

            function mouseCoords(e) {

                mouseX = e.pageX;
                mouseY = e.pageY;

            }

            gsap.to({}, .01, {

                repeat: -1,

                onRepeat: () => {

                    posX += (mouseX - posX) / 5;
                    posY += (mouseY - posY) / 5;

                    gsap.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });

                    gsap.set(follower, {
                        css: {
                            left: posX - 24,
                            top: posY - 24
                        }
                    });

                }

            });

            for (let i = 0; i < links.length; i++) {

                links[i].addEventListener('mouseover', () => {
                    cursor.classList.add('active');
                    follower.classList.add('active');
                });

                links[i].addEventListener('mouseout', () => {
                    cursor.classList.remove('active');
                    follower.classList.remove('active');
                });

            }

            swiperWrappers.forEach(swiperWrapper => {
                swiperWrapper.addEventListener('mouseover', () => {
                    aura.classList.add('slider');
                });

                swiperWrapper.addEventListener('mouseout', () => {
                    aura.classList.remove('slider');
                });
            });

            advantagesItemTops.forEach(advantageItemTop => {
                advantageItemTop.addEventListener('mouseover', () => {
                    aura.classList.add('expand');
                });

                advantageItemTop.addEventListener('mouseout', () => {
                    aura.classList.remove('expand');
                });
            });

            faqItemTops.forEach(faqItemTop => {
                faqItemTop.addEventListener('mouseover', () => {
                    aura.classList.add('expand');
                });

                faqItemTop.addEventListener('mouseout', () => {
                    aura.classList.remove('expand');
                });
            });

            body.addEventListener('mouseout', () => {
                cursor.classList.add('hidden');
                follower.classList.add('hidden');
            });

        });
    }
}
