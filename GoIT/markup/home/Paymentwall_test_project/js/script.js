//----------->HERE IS jQuery CODE----->

//$(function(){
//   $('.block2__posts-list:first-child').on('click', function(){
//       $(this).toggleClass('block2__posts-list_yellow');
//   });
//    $('.block2__posts-list:nth-child(2)').on('click', function(){
//       $(this).toggleClass('block2__posts-list_blue');
//   });
//    $('.block2__posts-list:nth-child(3)').on('click', function(){
//       $(this).toggleClass('block2__posts-list_red');
//   });
//    $('.block2__posts-list:nth-child(4)').on('click', function(){
//       $(this).toggleClass('block2__posts-list_golden');
//   });
//});

//-----IT'S NATIVE Java Script CODE----->

var list = document.querySelectorAll('.block2__posts-list');
var yellow_element = list[0];
var blue_element = list[1];
var red_element = list[2];
var golden_element = list[3];

//----Creating a function toggleClass---->

function toggleClass(element, className){
    if (!element || !className){
        return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

//-----Changing elements color----->
yellow_element.addEventListener('click', function() {
    toggleClass(yellow_element, 'block2__posts-list_yellow');
});
blue_element.addEventListener('click', function() {
    toggleClass(blue_element, 'block2__posts-list_blue');
});
red_element.addEventListener('click', function() {
    toggleClass(red_element, 'block2__posts-list_red');
});
golden_element.addEventListener('click', function() {
    toggleClass(golden_element, 'block2__posts-list_golden');
});
