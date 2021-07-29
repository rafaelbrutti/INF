function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "text.txt");
  xhttp.onload = function() {
    var doc = document.getElementById("texta");
      doc.textContent += this.responseText;
    }
  xhttp.send();
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "text.txt");
  xhttp.onload = function() {
  var doc = document.getElementById("texta2");
  var lines = this.responseText.split("<br/>");
  var p;
  for (var i in lines) {
      p = document.createElement("p");
      p.textContent = lines[i];
      p.style.color = getRandomColor();
      console.log(p.style.color);
      doc.appendChild(p);
    }
  }
  xhttp.send();
}
