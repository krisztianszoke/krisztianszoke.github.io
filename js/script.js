$(document).ready(function(){
   $('#menu_links li a').click(function(){
     $('#menu_links li a').removeClass('text-blue-700');
     $(this).addClass('text-blue-700');
   });
 });

window.addEventListener('scroll', function () {
    isNavbarVisible = window.scrollY <= parent.offsetHeight;
    handleScroll();
});

let sections = document.querySelectorAll("section");
let nav_links = document.querySelectorAll("#menu_links li a");

function handleScroll() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        let offset = section.offsetTop - 120;
        let id = section.getAttribute("id");

        if (scrollPosition >= offset) {
            nav_links.forEach(link => {
                link.classList.remove('text-blue-700');
            });

            let correspondingLink = document.querySelector(`#menu_links li a[href="#${id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('text-blue-700');
            }
        }
    });

    if (isNavbarVisible) {
        document.querySelector('nav').classList.remove('scrolled');
    } else {
        document.querySelector('nav').classList.add('scrolled');
    }
}
