var btnListener = function () {
    var promise = fetch('PersonServlet');
    promise.then(function (response) {
        return response.json();
    }).then(function (persons) {
        var tableRow = persons.map(function(person){
            return "<tr><td>" + person.fname + "</td><td>" + person.lName + "</td><td>" + person.phone + "</td></tr>";
        }).join(""); 
        document.getElementById("tbody").innerHTML = tableRow;
    });
};

document.getElementById("btn").onclick = btnListener;