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


function handleScroll() {
    if (isNavbarVisible) {
        document.querySelector('nav').classList.remove('scrolled');
    } else {
        document.querySelector('nav').classList.add('scrolled');
    }
}

var sections = document.querySelectorAll("section");
var nav_links = document.querySelectorAll("#menu_links li a");

window.addEventListener('scroll', function() {
   var scrollPosition = window.scrollY;

   sections.forEach(section => {
      var offset = section.offsetTop-120;
      var id = section.getAttribute("id");

      if (scrollPosition >= offset) {
         nav_links.forEach(link => {
            link.classList.remove('text-blue-700');
         });

         var correspondingLink = document.querySelector(`#menu_links li a[href="#${id}"]`);
         if (correspondingLink) {
            correspondingLink.classList.add('text-blue-700');
         }
      }
   });
});

var btn = $("#scrollBtn");
 
$(window).scroll(function () {
   
  if ($(window).scrollTop() > 400) {
    btn.addClass("show");
    btn.removeClass("hidden");
  } else {
   btn.addClass("hidden");
    btn.removeClass("show");
  }
});
 
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, { duration: 100, delay: 300 });
});