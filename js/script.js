
window.addEventListener('scroll', function () {
    isNavbarVisible = window.scrollY <= parent.offsetHeight;
    handleScroll();
});


function handleScroll() {
    if (isNavbarVisible) {
        document.querySelector('nav').classList.remove('scrolled');
    } else {
        document.querySelector('nav').classList.add('scrolled');
    }
}
