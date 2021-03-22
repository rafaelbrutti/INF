function fiboIt(n){

  var fib1 = 0;
  var fib2 = 1;
  var fibn = 0;

  if(n<0){
    return undefined;
  }
  if (n<2){
    return n;
  }


  for(let i = 2; i<= n; i++){
    fibn= fib1 + fib2;
    fib1 = fib2;
    fib2 = fibn;
  }

  return fibn;
}


function fibRec(n){
  if(n<0){
    return undefined;
  }

  if (n<2){
    return n;
  }

  return fibRec(n-1)+fibRec(n-2);

  }




function fibArr(array){
  var liste = [];

  for (var i = 0; i < array.length; i++){
    liste.push(fibRec(array[i]));
  }
  return liste;
}

function fiboMap(a){

  return a.map(fibRec);

}



exports.fiboIt = fiboIt;
exports.fibRec = fibRec;
exports.fibArr = fibArr;
exports.fiboMap = fiboMap;
