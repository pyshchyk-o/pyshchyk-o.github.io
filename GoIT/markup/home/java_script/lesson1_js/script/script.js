function pow(x, n) {
  var result = x;
    
    
  for (var i = 1; i < n; i++){
    result *= x;
  }
  return result;
}
var x = prompt("Укажите x", '');
var n = prompt("Укажите n", '');
  
  if (n <= 1){
      alert('Нужно больше 1');
  }else{
      alert(pow(x, n));
  }
var calResult = pow(x,n);

console.log('Result: ', calResult);