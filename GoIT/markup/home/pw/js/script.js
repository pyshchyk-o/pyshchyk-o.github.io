$(function(){
   $('.block2__posts-list:first-child').on('click', function(){
       $(this).toggleClass('block2__posts-list_yellow');
   });
    $('.block2__posts-list:nth-child(2)').on('click', function(){
       $(this).toggleClass('block2__posts-list_blue');
   });
    $('.block2__posts-list:nth-child(3)').on('click', function(){
       $(this).toggleClass('block2__posts-list_red');
   });
    $('.block2__posts-list:nth-child(4)').on('click', function(){
       $(this).toggleClass('block2__posts-list_golden');
   });
    
//   $submenu = $('.pw-header__nav-mobile');
//   $('.pw-header__nav-mobile_icon').on('click', function(){
//       $submenu.slideToggle();
//       $('.pw-wrapper').css('margin-left', '192px');
//   })
});