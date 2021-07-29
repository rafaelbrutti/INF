function send() {
  var xhttp = new XMLHttpRequest();
  var value = document.getElementById("textedit").value;
  console.log(value);
  if (value == "") return;
  value = "chat.php?phrase=" + value;
  xhttp.open("GET", value);
  xhttp.onload = function() {
    console.log(this.responseText);
  }
  xhttp.send();
}


function reload(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "chatlog.txt");
  xhttp.onload = function() {
    let div = document.getElementById("texta");
    let n = div.childElementCount;
    let lines = this.responseText.split("\n").reverse();
    for (let i=0; i<n; i++)
      div.removeChild(div.firstChild);
    let p;
    for (var i in lines) {
      if (lines[i] == "") continue;
      p = document.createElement("p");
      p.textContent = lines[i];
      div.appendChild(p);
      if (div.childElementCount == 10) break;
    }
  }
  xhttp.send();
}

setInterval(reload, 100);
