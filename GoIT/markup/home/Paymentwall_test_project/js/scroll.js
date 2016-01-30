$(document).ready(function() {

    $('#slide-menu').css('opacity','1');

    $(window).scroll(function () {
        var lastScrollLeft = 0;
        var documentScrollLeft = $(document).scrollLeft();
        if (lastScrollLeft != documentScrollLeft) {
            lastScrollLeft = documentScrollLeft;
        }
        if (lastScrollLeft > 0) {
            $("#slide-menu").trigger("close");
        }
    });

    $(window).resize(function () {
        $("#slide-menu").trigger("close");
    });

});