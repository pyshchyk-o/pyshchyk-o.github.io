$(function(){
  var url = $(location).attr('href');

  $('.icon-vk').on('click', function(){
    var src = 'http://vkontakte.ru/share.php?url=http://kiev.karavan.com.ua/?s=' + url;
    $(this).attr('href', src );
  });

  $('.icon-facebook2').on('click', function(){
    // var src = 'http://www.facebook.com/sharer.php?u=' + 'http://kiev.karavan.com.ua/?s=';
    var src = 'http://www.facebook.com/sharer.php?u=' + url;
    $(this).attr('href', src );
  });

  $('.icon-twitter').on('click', function(){
   var src = 'http://twitter.com/home?status=RT @cheger поделиться -  ' + url;
   $(this).attr('href', src );
  });
});
