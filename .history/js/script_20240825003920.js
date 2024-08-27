// Smooth Scroll
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Animations
const sections = document.querySelectorAll('.animate-section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Responsive Navigation Animation
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


//scroll
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scroll-up');
    const scrollToBottomBtn = document.getElementById('scroll-down');

    function updateScrollButtons() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        if (scrollPosition > 300 && (scrollPosition + windowHeight) < documentHeight - 300) {
            scrollToTopBtn.classList.add('show');
            scrollToBottomBtn.classList.add('show');
        } else if (scrollPosition <= 300) {
            scrollToTopBtn.classList.remove('show');
            scrollToBottomBtn.classList.add('show');
        } else if (scrollPosition + windowHeight >= documentHeight) {
            scrollToTopBtn.classList.add('show');
            scrollToBottomBtn.classList.remove('show');
        } else {
            scrollToTopBtn.classList.remove('show');
            scrollToBottomBtn.classList.remove('show');
        }
    }

    window.addEventListener('scroll', updateScrollButtons);

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollToBottomBtn.addEventListener('click', function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    updateScrollButtons();
});
