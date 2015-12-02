var x = +prompt('Write figure: ');
var n = +prompt('Write exponent: ');



function pow(x, n){
    var result = 1;
    for(i = 0; i < n; i++){
        result = result * x;
    }
    return result;
}

var powResult = pow(x, n);
alert(powResult);
console.log(powResult);


