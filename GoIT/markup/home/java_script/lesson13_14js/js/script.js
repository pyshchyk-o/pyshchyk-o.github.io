 'use strict';
$(function(){
    var html = $('#user_tmpl').html();
    var questions = [
                {   question: 'Who is the best friend of Harry Potter?',
                    answer1: 'Draco Malfoy',
                    answer2: 'Ronald Weasley',
                    answer3: 'Lord Voldemort',
                    key: 1
               },
               {    question: 'Who is J.K. Rowling?',
                    answer1: "Famous writer",
                    answer2: "Politician",
                    answer3: "Who knows?",
                    key: 1
               },
               {    question: 'Where is the Hogwarts?',
                    answer1: "England",
                    answer2: "USA",
                    answer3: "That is a secret",
                    key: 3
               }];
    
   var content = tmpl(html, {data : questions});
    $('body').append(content);
    
   
    $('.checkbox').on('click', function(){
    $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
    });
    
    
    var str = JSON.stringify(questions);
    var obj = JSON.parse(str);
    
    var $modal_window = $('.modal_window');
    var $modal_answers = $modal_window.children();
    var $tryAgain_button = $('.try_again');
    
    
    $('.button').on('click', check); 
    $tryAgain_button.on('click', function(){
        $modal_window.hide();
        $('.checkbox').removeAttr('checked');
    });
                    
    function check(){
    if($('.answer_label_1').eq(1).children().prop('checked')){
       $modal_answers.eq(0).children().eq(1).html('True').css({
            'color': 'green',
            'font-weight' : 'bold'
        });
     }else{
         $modal_answers.eq(0).children().eq(1).html('False').css({
            'color': 'red',
            'font-weight' : 'bold'
        });
     }
       
       if($('.answer_label_2').eq(0).children().prop('checked')){
       $modal_answers.eq(1).children().eq(1).html('True').css({
            'color': 'green',
            'font-weight' : 'bold'
        });
     }else{
        $modal_answers.eq(1).children().eq(1).html('False').css({
            'color': 'red',
            'font-weight' : 'bold'
        });
     } 
        
       if($('.answer_label_3').eq(2).children().prop('checked')){
       $modal_answers.eq(2).children().eq(1).html('True').css({
            'color': 'green',
            'font-weight' : 'bold'
        });
     }else{
        $modal_answers.eq(2).children().eq(1).html('False').css({
            'color': 'red',
            'font-weight' : 'bold'
        });
     } 
        $modal_window.show();
        
    }
   
});