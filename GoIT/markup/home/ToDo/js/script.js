$(document).ready(function(){

var todoList = $('#toDo .toDo_list');
var idMask = 'item_';

$('#toDo input').on('keydown', function(e) {
  if (e.keyCode != 13) {
    return;
  } else {
    var inputValue = e.target.value;
    e.target.value = "";    //Обнуляем строку
  };
  //Если были введены какие-то данные
  if (inputValue.length > 0) {
     var itemId = 0;
     todoList.children().each(function(index, e){
      // Забираем атрибут каждого элемента и обрезаем с 5 символа(маску)
      var elId = $(e).attr('id').slice(5); //слайсом обрезали маску идентификатора
      if (elId > itemId) {
        itemId = elId;
      }
      });
      itemId++; //Посмотрели максимальный идентификатор, увеличили на 1, для добавления нового элемента

     localStorage.setItem(idMask + itemId, inputValue);
     //Создаем элемент который добавим в список
      $('<li></li>').addClass('tdItem').attr('id', idMask + itemId).text(inputValue).appendTo(todoList);
  }

});

   //Функция для вывода данных из созданного Local Storage

   function getTasks() {
     var lsLength = localStorage.length; //Смотрим есть ли в нашем хранилище какие-то объекты
     if (lsLength > 0) {
       for (var i = 0; i < lsLength; i++){
         var key = localStorage.key(i); //Смотрим каждый ключ
         if(key.indexOf(idMask) == 0){
           $('<li></li>').addClass('tdItem').attr('id', key).text(localStorage.getItem(key)).appendTo(todoList);
         }
       }
     }
   }
   getTasks();


   $(document).on('click', '.tdItem', function(e){
     localStorage.removeItem($(e.target).attr('id'));
     $(e.target).remove(); //Remove item from the list
   });

});
