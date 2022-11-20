$(document).ready(function () {

   $('.navbar .dropdown-item').on('click', function (e) {
       var $el = $(this).children('.dropdown-toggle');
       var $parent = $el.offsetParent(".dropdown-menu");
       $(this).parent("li").toggleClass('open');

       if (!$parent.parent().hasClass('navbar-nav')) {
           if ($parent.hasClass('show')) {
               $parent.removeClass('show');
               $el.next().removeClass('show');
               $el.next().css({"top": -999, "left": -999});
           } else {
               $parent.parent().find('.show').removeClass('show');
               $parent.addClass('show');
               $el.next().addClass('show');
               $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
           }
           e.preventDefault();
           e.stopPropagation();
       }
   });

   $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
       $(this).find('li.dropdown').removeClass('show open');
       $(this).find('ul.dropdown-menu').removeClass('show open');
   });

});



let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

$('.carousel').carousel()
$('.carousel').carousel({
   interval: 2000
 })

 