var style = document.getElementsByTagName("div");

for (i = 0; i < style.length ; i++ ){
    style[i].style.backgroundColor = "yellow";
}

function buttonClick(){ 
    var change = document.getElementById("d1").style;
    change.backgroundColor = "blue";
    var change = document.getElementById("d2").style;
    change.backgroundColor = "purple";
    var change = document.getElementById("d3").style;
    change.backgroundColor = "green";
}

document.getElementById("btn").onclick = buttonClick;