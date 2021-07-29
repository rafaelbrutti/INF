function show(){
  var xhttp = new XMLHttpRequest();
  console.log("hihi")
  xhttp.open('GET',  "../../items")
  console.log("rafa le best")
  xhttp.onload = function(){
      var button = document.getElementById("MAINSHOW");
      button.innerHTML = this.response;
  }
  xhttp.send();
}

function add(){
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',  "../../add")
  xhttp.onload = function(){
      var text = this.responseText;
  }
  xhttp.send();
}

function clear(){
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',  "../../clear")
  xhttp.onload = function(){
      var text = this.responseText;
  }
  xhttp.send();
}

function remove(){
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',  "../../remove")
  xhttp.onload = function(){
      var text = this.responseText;
  }
  xhttp.send();
}
