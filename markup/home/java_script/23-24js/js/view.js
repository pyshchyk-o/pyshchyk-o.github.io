define(
  'view',
  ['jquery', 'markup/home/java_script/23-24js/js/model'],
  function(){

    function View(model) {
       var self = this;
                                        //  INIT
        function Init(){
          var wrapper = tmpl($('#wrapper-template').html());

          $('body').append(wrapper);
          self.elements = {
               input : $('.item-value'),
               addBtn : $('.item-add'),
               listContainer : $('.list'),
               check : $('.check')
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
    return View;
  }
);
