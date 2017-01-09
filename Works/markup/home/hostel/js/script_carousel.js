$(function() {
    $('.jcarousel').jcarousel({

    });


    $('.jcarousel-prev')
  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  });
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });




     $('.jcarousel-next')
  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  });
    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });


//    $('.jcarousel').jcarouselAutoscroll({
//      interval: 3000,
//      target: '+=1',
//      autostart: true
//  });
});
