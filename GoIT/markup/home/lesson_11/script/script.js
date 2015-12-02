var names = [];

for(i = 0; i < 3; i++){
    names[i] = prompt('Pleas, write user names: ');
}

 console.log(names);

var flag = false;
var userName = prompt('write your user name:');

for(i = 0; i < names.length; i++){
    if(names[i] === userName){
       flag = true;
    }
}
    
    if(flag){
        alert('Hello, ' + userName);
    }else{
        alert('Sorry, acces error. Check your user name!');
    }

