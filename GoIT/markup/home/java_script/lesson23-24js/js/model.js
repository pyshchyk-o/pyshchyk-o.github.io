define(
  'model',
    [],
  function(){

    function Model(data){
      var self = this;

      self.data = data;
                                           //  ADD ITEM
      self.addItem = function(item){
        if(item.length === 0){
          return;
        }
        self.data.push(item);
        return self.data;
      };

      self.editItem = function(item, index){
          self.data[index] = item.val();

        return self.data;
      };

      self.check = function(item){
      item.toggleClass("checked");
      item.parent().toggleClass("done");
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
   return Model;
  }
);
