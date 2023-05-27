var $menu = $('.mobile-menu'),
    $minMenu = $('.min-menu');

$menu.on('click', slide);

function slide(e){
  // $minMenu.slideToggle();
  $minMenu.toggle();
  e.preventDefault();
}
