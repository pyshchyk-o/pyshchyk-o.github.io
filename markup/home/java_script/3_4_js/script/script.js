var app = {
    
    createElement: function(params) {
        
    var element = document.createElement(params.tagName);
        
        if(params.inputType){
            element.setAttribute('type', params.inputType);
        }
        if(params.tagName){
      element.className = params.className;
        }
        if(params.content){
            element.innerHTML = params.content;
        }
        if(params.parentElement){
            params.parentElement.appendChild(element);
        }
        
        return element;
    },
    
    generateQuestions: function(questionsAmount, answersAmount){
        
        for(var i = 0; i < questionsAmount; i++){
            this.createElement({
                tagName : 'h2',
                content : 'Вопрос №' + (i + 1),
                parentElement :form
            });
            
            for(var j = 0; j < answersAmount; j++){
                var label = this.createElement({
                    tagName : 'label',
                    content : 'Вариант ответа №' + (j + 1),
                    lebelFor : 'checkbox2',
                    parentElement : form
                });
                 var checkbox = this.createElement({
                    tagName : 'input',
                    inputType : 'checkbox',
                });
                
               
//             label.insertAdjacentElement('afterBegin', checkbox);                
             label.insertAdjacentHTML('afterBegin', '<input type = "checkbox">');
                
            }
        };
    }
}


var body = document.querySelector('body');
var h1 = app.createElement({
    tagName : 'h1',
    content : 'Тест по программированию',
    parentElement : body
    });

var form = app.createElement({
    tagName : 'form',
    parentElement : body
});

app.generateQuestions(3, 3);

var submit = app.createElement({
    tagName : 'button',
    inputType : 'button',
    content : 'Отправить',
    parentElement : form
});


submit.setAttribute('class','btn');
submit.classList.add('btn-info');
h1.setAttribute('class','header');


















