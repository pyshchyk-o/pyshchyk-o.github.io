(function() {
	var $body = document.body
	var $trigger = $body.getElementsByClassName('menu-button')[0];
    
	if ( typeof $trigger !== 'undefined' ) {
		$trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	};
}).call(this);