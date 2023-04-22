const pageHeader = document.getElementById('page-header-content');
const ourServices = document.getElementById('our-services-content');
const about = document.getElementById('about-content');
const contact = document.getElementById('contact-content');

const pageHeaderHeight = pageHeader.offsetHeight
const ourServicesHeight = ourServices.offsetHeight
const aboutHeight = about.offsetHeight
// const contactHeight = contact.offsetHeight

const homeNavLink = document.querySelector('.home-nav-link');
const servicesNavLink = document.querySelector('.services-nav-link');
const aboutNavLink = document.querySelector('.about-nav-link');
const contactNavLink = document.querySelector('.contact-nav-link');

const getOffsetTop = (e) => {
    let offsetTop = 0;
    do {
      if ( !isNaN( e.offsetTop ) )
      {
          offsetTop += e.offsetTop;
      }
    } while( e = e.offsetParent );
    return offsetTop;
}

const scrollTracker = () => {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const pageHeaderOffset =  getOffsetTop(pageHeader) + pageHeaderHeight;
    const ourServicesOffset =  getOffsetTop(ourServices) + ourServicesHeight;
    const aboutOffset =  getOffsetTop(about) + aboutHeight;
    // const contactOffset =  getOffsetTop(contact) + contactHeight;

    // if (scrollTop > aboutOffset) {
    //     contactNavLink.classList.add('link-active');
    //     homeNavLink.classList.remove('link-active');
    //     servicesNavLink.classList.remove('link-active');
    //     aboutNavLink.classList.remove('link-active');
    // }
    if (scrollTop > ourServicesOffset) {
        aboutNavLink.classList.add('link-active');
        homeNavLink.classList.remove('link-active');
        servicesNavLink.classList.remove('link-active');
        contactNavLink.classList.remove('link-active');
    }
    else if (scrollTop > pageHeaderOffset) {
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