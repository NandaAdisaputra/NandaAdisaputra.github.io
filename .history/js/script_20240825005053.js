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
            // Jika berada di tengah halaman, tampilkan kedua tombol
            scrollToTopBtn.style.display = 'block';
            scrollToBottomBtn.style.display = 'block';
        } else if (scrollPosition <= 300) {
            // Jika berada di bagian atas halaman, hanya tampilkan tombol scroll ke bawah
            scrollToTopBtn.style.display = 'none';
            scrollToBottomBtn.style.display = 'block';
        } else if (scrollPosition + windowHeight >= documentHeight) {
            // Jika berada di bagian bawah halaman, hanya tampilkan tombol scroll ke atas
            scrollToTopBtn.style.display = 'block';
            scrollToBottomBtn.style.display = 'none';
        } else {
            // Pastikan kedua tombol tidak tampil di kondisi selain di atas
            scrollToTopBtn.style.display = 'none';
            scrollToBottomBtn.style.display = 'none';
        }
    }

    // Pasang event listener untuk mendeteksi scroll
    window.addEventListener('scroll', updateScrollButtons);

    // Pasang event listener untuk mengklik tombol scroll ke atas
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Pasang event listener untuk mengklik tombol scroll ke bawah
    scrollToBottomBtn.addEventListener('click', function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    // Pastikan tombol diperbarui saat halaman pertama kali dimuat
    updateScrollButtons();
});

//dropdo