$(function() {
    $('.jcarousel').jcarousel({
    
    });
    
    
    $('.jcarousel-prev')
  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });
    

    
    
     $('.jcarousel-next')
  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
    
    
    
     $('.jcarousel-pagination')
  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })
  .on('click', function(e) {
                        e.preventDefault();
  })
     
     $('.jcarousel-pagination').jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });
    
//    $('.jcarousel').jcarouselAutoscroll({
//      interval: 3000,
//      target: '+=1',
//      autostart: true
//  });
});



