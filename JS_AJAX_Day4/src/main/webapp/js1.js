var btnListener = function () {
    var promise = fetch('Quotes');
    promise.then(function (response) {
        return response.json();
    }).then(function (quote) {
        i = Math.floor((Math.random() * (quote.length-1)));
        document.getElementById("joke").innerHTML = quote[i];
    
    });
};

document.getElementById("btn").onclick = btnListener;

setInterval(function(){document.getElementById("btn").click();}, 500);

