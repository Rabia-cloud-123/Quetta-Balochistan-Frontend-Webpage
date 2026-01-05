function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display =
        navLinks.style.display === 'flex' ? 'none' : 'flex';
}

const hero = document.querySelector('.hero');
const heroBg = document.querySelector('.hero-bg');

const images = [
    'hero1.jpg',
    'hero2.jpg',
    'hero3.jpg',
    'hero4.png'
];

let index = 0;
let interval = null;

// initial image
heroBg.style.backgroundImage = `url(${images[index]})`;

function changeImage() {
    heroBg.classList.add('fade');

    setTimeout(() => {
        index = (index + 1) % images.length;
        heroBg.style.backgroundImage = `url(${images[index]})`;
        heroBg.classList.remove('fade');
    }, 300); // fast fade
}

hero.addEventListener('mouseenter', () => {
    interval = setInterval(changeImage, 1200);
});

hero.addEventListener('mouseleave', () => {
    clearInterval(interval);
});
