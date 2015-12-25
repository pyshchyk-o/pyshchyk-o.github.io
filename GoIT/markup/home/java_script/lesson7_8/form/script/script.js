$(function(){
    
  var $form = $('form');
  var $title = $('.form-group > #title');
  var $button = $('.btn.btn-info');
  var $firstName = $('#firstname');
  var $lastName = $('#lastname');
  var $address = $('#address');
    
    
    $title.each(function(){
        $(this).hide();
    });
    
    $button.on('click', function(){
        $title.fadeToggle();
        $($title[3]).fadeToggle(2000);
    });
    
    $firstName.hover(function() {
  $($title[0]).fadeToggle();
    });
    
    $lastName.hover(function() {
  $($title[1]).fadeToggle();
    });
    
    $address.hover(function() {
  $($title[2]).fadeToggle();
    });
    
});