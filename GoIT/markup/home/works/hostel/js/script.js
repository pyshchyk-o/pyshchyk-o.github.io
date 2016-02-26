
$(function(){
   $('.header-menu').on('click', function(){
      $('.mobile-menu').toggleClass('mobile-menu_active');
      $('.header-menu').toggleClass('header-menu_close');
   });

$('#call').on('click', function(){
  $( ".form-box_pop-up" ).show();
});
$('.pop-up_close').on('click', function(){
    $( ".form-box_pop-up" ).hide();
});

});
