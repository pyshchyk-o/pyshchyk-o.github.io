//----------->HERE IS jQuery CODE----->

$(function(){
   function openPopup(){
     $('.pop-up').show();
     $('.opacity_wrapper').addClass('opacity_wrapper_active');
   }
   setTimeout(openPopup, 2000);

   $('.close_button').on('click', function(){
      $('.pop-up').hide();
      $('.opacity_wrapper').removeClass('opacity_wrapper_active');
  });


    $('.search-line').on('click', function(){
       $('.search-box').toggle();
   });

   $('.header-menu').on('click', function(){
      $('.mobile-menu').toggleClass('mobile-menu_active');
      $('.header-menu').toggleClass('header-menu_close');
      $('.opacity_wrapper').toggleClass('opacity_wrapper_active');
   });


});
