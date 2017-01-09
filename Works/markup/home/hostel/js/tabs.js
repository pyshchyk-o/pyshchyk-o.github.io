$(function(){

    var $headersTabs = $('.tabs');

    $headersTabs.each(function(){

        var $active;
        var $innerText;
        var $links = $(this).find('a');

        $active = $($links.filter(location.hash)[0] || $links[0]);
					$active.addClass('active');

					$innerText = $($active[0].hash);

					$links.not($active).each(function () {
						$(this.hash).hide();
					});


				$(this).on('click', 'a', function(e){

						$active.removeClass('active');
						$innerText.hide();

						$active = $(this);
						$innerText = $(this.hash);


						$active.addClass('active');
						$innerText.show();


						e.preventDefault();
					});
    });

});
