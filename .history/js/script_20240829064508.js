document.addEventListener('DOMContentLoaded', function () {
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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    sections.forEach(section => observer.observe(section));

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

    // Scroll Buttons
    const scrollToTopBtn = document.getElementById('scroll-up');
    const scrollToBottomBtn = document.getElementById('scroll-down');
    function updateScrollButtons() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        if (scrollPosition > 300 && (scrollPosition + windowHeight) < documentHeight - 300) {
            scrollToTopBtn.style.display = 'block';
            scrollToBottomBtn.style.display = 'block';
        } else if (scrollPosition <= 300) {
            scrollToTopBtn.style.display = 'none';
            scrollToBottomBtn.style.display = 'block';
        } else if (scrollPosition + windowHeight >= documentHeight) {
            scrollToTopBtn.style.display = 'block';
            scrollToBottomBtn.style.display = 'none';
        } else {
            scrollToTopBtn.style.display = 'none';
            scrollToBottomBtn.style.display = 'none';
        }
    }
    window.addEventListener('scroll', updateScrollButtons);
    scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    scrollToBottomBtn.addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
    updateScrollButtons();
});

//unduh CV
document.addEventListener('DOMContentLoaded', function () {
    // Get the download button
    const downloadButton = document.getElementById('cv-download-button');

    // Add an event listener for click
    downloadButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Create a temporary link element
        const tempLink = document.createElement('a');
        tempLink.href = downloadButton.href; // Set the href attribute to the CV file
        tempLink.download = ''; // Trigger download without specifying a filename

        // Append the link to the body
        document.body.appendChild(tempLink);

        // Programmatically click the link to start the download
        tempLink.click();

        // Remove the link from the document
        document.body.removeChild(tempLink);
    });
});