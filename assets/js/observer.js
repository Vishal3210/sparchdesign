const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-content-animation');
        }else {
            entry.target.classList.remove('section-content-animation');
        }
    })
});

const elements = document.querySelectorAll('.section-content');
elements.forEach((el) => observer.observe(el));