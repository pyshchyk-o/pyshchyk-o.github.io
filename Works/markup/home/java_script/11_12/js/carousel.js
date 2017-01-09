(function($) {
    $.fn.carousel = function(){
    var left = $('.carousel-arrow-left');
    var right = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 325;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;

    
    left.on('click', function() {
        if (currentLeftValue != maximumOffset) {
        currentLeftValue += 325;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });
 
    right.on('click', function() {
        if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 325;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });
 };
}) (jQuery);