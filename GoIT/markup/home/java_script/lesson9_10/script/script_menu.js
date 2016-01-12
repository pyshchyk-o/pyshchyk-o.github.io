$(function() {
var $links = $('.menu a');
var $submenu = $('.dropdown .submenu');    
//var $submenu = $links.siblings('.menu li ul');
var $dropdown = $('.menu .dropdown');
var $dropdown_second = $('.dropdown_second');
var $submenu_second = $('.sub_second');
    
  $links.hover(function(){
      $(this).animate({
          'color' : 'black'
      }, 200);
  }, function(){
      $(this).animate({
          'color' : 'white'
      }, 200);
  }); 
    
   $dropdown.hover(function(){
       $submenu.animate({
          backgroundColor:"#E14B4B"
      }, 500);
       $submenu.slideDown(100);
       
   }, function(){
       $submenu.animate({
          'opacity' : 'hide',
          backgroundColor:"#E14B4B"
      }, 100);
   }).stop();
 
    $dropdown_second.hover(function(){
         $submenu_second.animate({
          backgroundColor:"#E14B4B"
      }, 500);
       $submenu_second.slideDown(100);
       
   }, function(){
       $submenu_second.animate({
          'opacity' : 'hide',
          backgroundColor:"#E14B4B"
      }, 100);
   }).stop();
    });
