define(
  'controller',
  ['jquery','markup/home/java_script/23-24js/js/model', 'view'],
  function(){

    function Controller(model, view){
       var self = this;
       view.elements.input.on('keydown', add);
       view.elements.addBtn.on('click', addItem);
       view.elements.listContainer.on('click', '.item-delete', deleteItem);
       view.elements.listContainer.on('click', '.item-check', checked);
       view.elements.listContainer.on('click', '.item', edit);
                             //  ADD ITEM
       function addItem(){
         var newItem = view.elements.input.val();
         model.addItem(newItem);
         view.render(model.data);
         view.elements.input.val('');
       }

      function add(e){
        if(e.keyCode != 13){
          return;
        }
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.render(model.data);
        view.elements.input.val('');
      }

      function edit() {
        var item = $(this),
            val = item.val(),
            index = model.data.indexOf(val),
            btnOk = $('.okey');


        item.parent().prepend('<button class="okey">Edit</button>');

        view.elements.listContainer.on('click', '.okey', function(){
          model.editItem(item, index);
          view.render(model.data);
          btnOk.hide();
         });
        }

        function checked(){
        var item = $(this);
         model.check(item);
       }

       function deleteItem(){
         var item = $(this).attr('data-value');
         model.removeItem(item);
         view.render(model.data);
       }
    }
     return Controller;
  }
);
