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


// script.js
document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function () {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
            dropdownContent.classList.add('hide');
        } else {
            dropdownContent.classList.remove('hide');
            dropdownContent.classList.add('show');
        }
    });
});
