$(document).ready( function() {

   // SLIDER
  $('.flexslider').flexslider({
     animation: "slide"
   });
  // Renderingimage for Isotop
   function imgRender(img) {

   			$.ajax({
   				url: 'http://api.pixplorer.co.uk/image?word=' + img + '&amount=7&size=m',
   				success: function(data) {
   					console.log(data);
   					var html = tmpl($('#grid-template').html(), data);
            $('.grid').remove();

   					$('.ideas').append(html);
            // ISOTOP
          $(window).resize(function() {
           if ($(window).width() > 960) {
             $('.grid').isotope({
               itemSelector: '.grid-item',
               masonry: {
                 columnWidth: 20,
                 gutter: 15
               }
             });
           }
          else {
            $('.grid').isotope({
              itemSelector: '.grid-item',
              masonry: {
                columnWidth: 240,
                gutter: 20
              }
            });
          }
         });

   			}
   			});
   		}
      // SEARCH
      $('.search').on('submit', submit);

       function submit(e){
         var val = encodeURIComponent($('.interests').val());
		   	imgRender(val);
         e.preventDefault();
       }

});
