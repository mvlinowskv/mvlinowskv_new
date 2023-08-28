const nav = document.querySelector('.nav__bar');

document.addEventListener('click', function(e) {
    console.log('dziala')
    if (e.target.closest('.nav__hamburger')) {
        nav.classList.add('nav__bar--open');
    } else {
        nav.classList.remove('nav__bar--open');
    }
})