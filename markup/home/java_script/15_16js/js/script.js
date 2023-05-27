function GoogleCallback (func, data) {
        window[func](data);
    
           var results = document.createElement('div');
            results.classList.add('results');
            var ul = document.createElement("ul");
            
            $.each(data.results, function(i, val) {

                var li = document.createElement('li');
                li.innerHTML = ('<h3><a href="' + val.url + '">' + val.title + '</a></h3><p class="visibleURL">' + val.visibleUrl + '</p><p class="content">' + val.content + '</p>');
                results.appendChild(ul);
                ul.appendChild(li);
            });
            $('.wrapper').append(results);
        
        };
    
$(function(){
    
   
   
    var $ajaxCall = function(){
        
    var body = $(document.body);
    var $form = $('#search-box');
    var $value = $('#search').val();
        $('.results').remove();
  
    var url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + $value + '&callback=GoogleCallback&context=?';
        
    $.ajax({
        url : url,
        dataType : 'jsonp',
       });
        };
    
    
   
    
    $('#search-button').click(function(e) {
    e.preventDefault();

    $ajaxCall();
    });
     
    var human = {
        name : 'Olya',
        age : 19,
        sex : 'female',
        height : 163,
        weight : 47
    };
    
    var student = {
        courses : 'IT',
        scholarship : 800
    }
    
    var worker = {
        workPlace: 'ELLE',
        salary: '2000',
        work : function() {
            alert('Hard working!');
        }
    }
    
    student.__proto__ = human;
    worker.__proto__ = student;
    
    console.log('human', human);
    console.log('student', student);
    console.log('worker', worker);
    
    console.log('Student name is ' + student.name + ' she is studing Front-end on ' + student.courses + ' courses. Also she works in ' + worker.workPlace);
});
    
