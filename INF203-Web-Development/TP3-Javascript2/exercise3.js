var nbslide = 0
var slide;

function load(){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'slides.json')
    xhttp.onload = function(){
        var text = this.responseText;
        slide = JSON.parse(text);
    }
    xhttp.send();
}

load();

function play(){

    var div = document.getElementById("SLSH");
    while (div.childElementCount !=0){
           div.removeChild(div.firstChild);
    }
    var frame = document.createElement("iframe");
    frame.src = slide.slides[nbslide].url;
    div.appendChild(frame);
    nbslide+=1
    if(nbslide<6){
        setTimeout(play, 2000);
    }
}
