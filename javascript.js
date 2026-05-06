document.addEventListener('DOMContentLoaded', () => {
    // Nav link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Simple terminal typing effect for the hero section
    const title = document.querySelector('#home h1');
    if (title) {
        title.style.opacity = '0';
        setTimeout(() => {
            title.style.transition = 'opacity 1s ease-in';
            title.style.opacity = '1';
        }, 500);
    }

    console.log("Portfolio System Initialized...");
    console.log("Welcome, HR Manager! Feel free to explore the source code.");
});
