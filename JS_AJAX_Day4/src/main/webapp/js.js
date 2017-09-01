var btnListener = function () {
    var promise = fetch('https://jokes-plaul.rhcloud.com/api/joke');
    promise.then(function (response) {
        return response.json();
    }).then(function (quote) {
        document.getElementById("joke").innerHTML = quote.joke;
    });
};

document.getElementById("btn").onclick = btnListener;

setInterval(function(){document.getElementById("btn").click();}, 2000);

