
  function Model(data){
    var self = this;

    self.data = data;
                                         //  ADD ITEM
    self.addItem = function(item){
      self.data.push(item);
      return self.data;
    };
                           // REMOVE ITEM
    self.removeItem = function(item){
      var itemIndex = self.data.indexOf(item);
      if(itemIndex === -1){
        return;
      }
      self.data.splice(itemIndex, 1);
      return self.data;
    };
  }


  function View(model) {
     var self = this;
                                      //  INIT
      function Init(){
        var wrapper = tmpl($('#wrapper-template').html());

        $('body').append(wrapper);
        self.elements = {
             addBtn : $('.item-add'),
             listContainer : $('.list')
        };
        self.render(model.data);
      }
                                       // RENDER
        self.render = function(data){
          var list = tmpl($('#list-template').html(), {data : data});
          self.elements.listContainer.html(list);
        };

      Init();
  }


  function Controller(model, view){
     var self = this;
     view.elements.addBtn.on('click', addItem);
     view.elements.listContainer.on('click', '.item-delete', deleteItem);


                           //  ADD ITEM
     function addItem(){
       var newItem = 'List';
       model.addItem(newItem);
       view.render(model.data);

     }

     function deleteItem(){
       var item = $(this).attr('data-value');
       model.removeItem(item);
       view.render(model.data);
     }
  }


  $(function(){
     var list = ['List', 'List'];
     var model = new Model(list);
     var view = new View(model);
     var controller = new Controller(model, view);
  });
