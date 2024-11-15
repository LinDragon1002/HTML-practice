$(document).ready(function(){
  AOS.init()
})
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('nav').toggleClass('scollor', $(this).scrollTop() > 50);
})

document.addEventListener("DOMContentLoaded", function () {
    const mainIcon = document.querySelector(".main-icon");
    const subIcons = document.querySelector(".sub-icons");

    mainIcon.addEventListener("click", function () {
        subIcons.classList.toggle("active");
    });
});
$(document).ready(function(){
    $('.owl1').owlCarousel({
        loop: true,
        autoplay: true,
        center: true,
        margin:20,
        responsive: {
          0: {
            items: 1
          },
          992: {
            items: 1
          },
          1200: {
            items: 3
          },
        }
      })
})
$(document).ready(function(){
  $('.owl2').owlCarousel({
      loop: true,
      autoplay: true,
      center: true,
      // margin:20,
      responsive: {
        0: {
          items: 1
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        },
      }
    })
})