const pageHeader = document.getElementById('page-header-content');
const ourServices = document.getElementById('our-services-content');
const about = document.getElementById('about-content');
const contact = document.getElementById('contact-content');

const homeNavLink = document.querySelector('.home-nav-link');
const servicesNavLink = document.querySelector('.services-nav-link');
const aboutNavLink = document.querySelector('.about-nav-link');
const contactNavLink = document.querySelector('.contact-nav-link');

const scrollTracker = () => {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const pageHeaderOffset =  pageHeader.offsetTop + pageHeader.offsetHeight;
    const ourServicesOffset =  ourServices.offsetTop + ourServices.offsetHeight;
    // const aboutOffset =  about.offsetTop + about.offsetHeight;
    // const contactOffset =  contact.offsetTop + contact.offsetHeight;

    // if (scrollTop > aboutOffset) {
    //     contactNavLink.classList.add('link-active');
    //     homeNavLink.classList.remove('link-active');
    //     servicesNavLink.classList.remove('link-active');
    //     aboutNavLink.classList.remove('link-active');
    // }
    // if (scrollTop > ourServicesOffset) {
    //     aboutNavLink.classList.add('link-active');
    //     homeNavLink.classList.remove('link-active');
    //     servicesNavLink.classList.remove('link-active');
    //     contactNavLink.classList.remove('link-active');
    // }
    if (scrollTop > pageHeaderOffset) {
        servicesNavLink.classList.add('link-active');
        homeNavLink.classList.remove('link-active');
        aboutNavLink.classList.remove('link-active');
        contactNavLink.classList.remove('link-active');
    } else {
        homeNavLink.classList.add('link-active');
        servicesNavLink.classList.remove('link-active');
        aboutNavLink.classList.remove('link-active');
        contactNavLink.classList.remove('link-active');
    }
}

// window.onscroll = scrollTracker();