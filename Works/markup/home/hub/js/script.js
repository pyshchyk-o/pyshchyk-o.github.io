//----------->HERE IS jQuery CODE----->

$(function(){

    $('.search-line').on('click', function(){
       $('.search-box').toggle();
   });

   $('.header-menu').on('click', function(){
      $('.mobile-menu').toggleClass('mobile-menu_active');
      $('.header-menu').toggleClass('header-menu_close');
      $('.opacity_wrapper').toggleClass('opacity_wrapper_active');
   });


});
