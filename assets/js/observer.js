navBar = document.querySelector('.nav');
logoHeader = document.querySelector('.logo-header');
navAnchor = document.querySelectorAll('.nav-anchor');
ourServicesCard = document.querySelectorAll('.our-services-card');
navLinks

const pageHeaderObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-content-animation');
            navBar.classList.remove('nav-white');
            navAnchor.forEach((anchor) => {
                anchor.classList.remove('nav-anchor-white');
            });
            logoHeader.classList.remove('logo-header-white');
        }else {
            entry.target.classList.remove('section-content-animation');
            navBar.classList.add('nav-white');
            navAnchor.forEach((anchor) => {
                anchor.classList.add('nav-anchor-white');
            });
            logoHeader.classList.add('logo-header-white');
        }
    })
});

const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('services-content-animation');
            ourServicesCard.forEach((card) => {
                card.classList.add('our-services-card-show');
            });
        }
        else {
            entry.target.classList.remove('services-content-animation');
            ourServicesCard.forEach((card) => {
                card.classList.remove('our-services-card-show');
            });
        }
    })
});

const pageHeaderContent = document.querySelectorAll('.page-header-content');
pageHeaderContent.forEach((el) => pageHeaderObserver.observe(el));

const serviceContent = document.querySelectorAll('.our-services-content');
serviceContent.forEach((el) => servicesObserver.observe(el));