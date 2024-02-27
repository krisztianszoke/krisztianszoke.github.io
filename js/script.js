$(document).ready(function(){
   // set active links
   $('#menu_links li a').click(function(){
     $('#menu_links li a').removeClass('text-blue-700');
     $(this).addClass('text-blue-700');
   });
 });

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
