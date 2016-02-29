var inputPC = document.getElementById('pc'),
    inputMin = document.getElementById('min'),
    saveBtn = document.querySelector('.save'),
    cancelBtn = document.querySelector('.cancel'),
    input = document.querySelectorAll('.input');

for(var i = 0; i < input.length; i++){
   onClick(i);
}

function onClick(i){
  input[i].addEventListener('click', testCheckbox);
}
function testCheckbox(){
    if (this.checked === true){
        saveBtn.style.display = "block";
        cancelBtn.style.display = "block";
    }else{
      saveBtn.style.display = "block";
      cancelBtn.style.display = "block";
    }
}

// Activate remove btn
cancelBtn.addEventListener('click',resetCheck);

function resetCheck(){
  location.reload();
}

// Activate save btn
saveBtn.addEventListener('click',saveVal);

function saveVal(){
      localStorage.setItem('inputPC', inputPC.checked);
      localStorage.setItem('inputMin', inputMin.checked);
      location.reload();
}

// For saving our checked result, when the page reloads
function load(){
    var checkedPC = JSON.parse(localStorage.getItem('inputPC')),
        checkedMin = JSON.parse(localStorage.getItem('inputMin'));
   inputPC.checked = checkedPC;
   inputMin.checked = checkedMin;
}
load();



// -------------------Toggling aside menu
var logout = document.querySelector('.logout'),
    settings = document.querySelector('.settings'),
    profile = document.querySelector('.my-profile'),
    account = document.querySelector('.account');
    list = document.querySelectorAll('.profile-menu__list');

var a = document.getElementById('settings'),
    b =  document.getElementById('account'),
    c = document.getElementById('my-profile'),
    g = document.getElementById('logout'),
    arrList = [a, b, c, g];

  logout.addEventListener('click', function(){
    for(var i = 0; i < list.length; i++){
      list[i].classList.remove('profile-menu__list_active');
    }
    for(var j = 0; j < arrList.length; j++){
      arrList[j].style.display = "none";
    }
    logout.classList.add('profile-menu__list_active');
    document.getElementById('logout').style.display = "block";
  });

  settings.addEventListener('click', function(){
    for(var i = 0; i < list.length; i++){
      list[i].classList.remove('profile-menu__list_active');
    }
    settings.classList.add('profile-menu__list_active');
    for(var j = 0; j < arrList.length; j++){
      arrList[j].style.display = "none";
    }
    document.getElementById('settings').style.display = "block";
  });

  profile.addEventListener('click', function(){
    for(var i = 0; i < list.length; i++){
      list[i].classList.remove('profile-menu__list_active');
    }
    profile.classList.add('profile-menu__list_active');
    for(var j = 0; j < arrList.length; j++){
      arrList[j].style.display = "none";
    }
    document.getElementById('my-profile').style.display = "block";
  });

  account.addEventListener('click', function(){
    for(var i = 0; i < list.length; i++){
      list[i].classList.remove('profile-menu__list_active');
    }
    account.classList.add('profile-menu__list_active');
    for(var j = 0; j < arrList.length; j++){
      arrList[j].style.display = "none";
    }
    document.getElementById('account').style.display = "block";
  });
