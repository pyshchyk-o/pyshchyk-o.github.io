$(window).load(function() {
  // Slider
$('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5,
    minItems: 2,
    maxItems: 4
  });
// Form - email
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

//-------------------------------------------------  Ajax - JSON - PHP

//  $('#form').on('submit', function(e){
//  var email = {"email" : $("#email").val()};
//  if($("#email").val() === ""){
//      $('.window').show()
//      .html('<a href="#" class="window_close"></a>' + 'Пожалуйста, введите email!');
//      e.preventDefault();
//    }else{
//      $.ajax({
//                url:'php/send.php',
//                type:'POST',
//                data:'jsonData=' + JSON.stringify(email),
//                success: function(data) {
//                    $('.window').show()
//                        .html('<a href="#" class="window_close"></a>' + data);
//                        $("#email").val('');
//                        e.preventDefault();
//                }
//            });
//            return false;
//    }
// });
//  $('.window').on('click', function(e){
//    e.preventDefault();
//    $('.window').hide();
//  });

// ---------------------------------------------------PHP file

// <?php
//    $data = json_decode($_POST['jsonData']);
//    $response = ''.count($data).'';
//    foreach ($data as $key=>$value) {
//     $response .= ' Email: '.$value.'';
// }
// echo $response;
// ?>

});
