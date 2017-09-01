var fetchTime = function () {
    var promise = fetch('TimeServlet');
    promise.then(function (response) {
        return response.json();
    }).then(function (time) {
        document.getElementById("time").innerHTML = time;
    });
};

setInterval(fetchTime, 1000);


