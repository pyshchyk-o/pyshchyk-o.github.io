requirejs.config({
	paths: {
		'jquery': "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery"
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}
});

require(
  [ 'tmpl',
    'model',
    'view',
    'controller',
    'jquery',
      ],
  function(tmpl, Model, View, Controller, $){

    $(function(){
      var toDoList = [];
      var model = new Model(toDoList);
      var view = new View(model);
      var controller = new Controller(model, view);
    });
  }
);
