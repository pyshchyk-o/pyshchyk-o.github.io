$(window).load(function() {
$('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5,
    minItems: 2,
    maxItems: 4
  });

var user,
    json,
    pars;

$('#form').on('submit', function(e){
  if($("#email").val() === ""){
    $('.window').show()
    .html('<a href="#" class="window_close"></a>' + 'Пожалуйста, введите email!');
    e.preventDefault();
  }else{
    user = {email : $("#email").val()};
    json = JSON.stringify(user);
    pars = JSON.parse(json);
    $('.window').show()
    .html('<a href="#" class="window_close"></a>' + 'Ваш email:  '+ pars.email);
    $("#email").val('');
    e.preventDefault();
  }
  $('.window_close').on('click', function(e){
    $('.window').hide();
    e.preventDefault();
  });
});


});
