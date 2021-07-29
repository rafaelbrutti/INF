var nbslide = 0
var slide;
var pausebool = false;

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

function pause(){
    if(pausebool){
        pausebool=false;
        playslides()
    }
    else{
        pausebool=true;
        nbslide-=1
    }
}

function nextslide(){

    pausebool=true;
    if (nbslide>5){return;}
    else {

        div = document.getElementById("SLSH");
        while (div.childElementCount !=0){
                div.removeChild(div.firstChild);
        }
        var frame = document.createElement("iframe");
        frame.src = slide.slides[nbslide].url;
        div.appendChild(frame);
        nbslide++;


    }
}
function previousslide(){
    pausebool=true;
    if(nbslide<2){return;}
    else{
        nbslide-=1
        div = document.getElementById("SLSH");
        while (div.childElementCount !=0){
                div.removeChild(div.firstChild);
        }
        var frame = document.createElement("iframe");
        frame.src = slide.slides[nbslide-1].url;
        div.appendChild(frame);
    }


}
