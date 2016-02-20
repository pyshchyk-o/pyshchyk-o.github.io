$(function(){
    $('.my-carousel').carousel({});


    $('.btn-play').on('click', function (e) {
        var video = $('#video').get(0);
        video.play();
        $(this).hide();
    });


$(document).on('click', '#video',  function (e) {
    var video = $(this).get(0);
    if (video.paused === false) {
        video.pause();
        $('.btn-play').show();
    }else{
      video.play();
      $('.btn-play').hide();
    }
    return false;
});

});
