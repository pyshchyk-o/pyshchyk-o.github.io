$(function(){
   var html = $('#user_tmpl').html();
   var profile = [{
       name : 'Пищик Ольга Петровна',
       img : 'img/profile_img.jpg',
       uni : 'Студентка Киевского Национального Университета им. Карпенко-Карого',
       goal : 'Хочу учить фронтенд, потому что:',
       first_goal : 'Это интересно',        
       second_goal : 'Возможность работать удаленно',
       phone : 'Мой контактный телефон: </br> 093-772-06-97',
       facebook : 'Мой профиль в Facebook',
       link : 'Facebook',
       feedback : 'Мой фидбек:<br>Рада быть на курсе Frontend',
       div_class : 'wrapp',
       ul_class : 'list'
       
       }
                 
    ];
    
   var content = tmpl(html, {
       data : profile
   });
    $('.profile_button').on('click', function(){
    $('body').append(content);
    });
});