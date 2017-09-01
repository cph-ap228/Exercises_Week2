fetch('http://uinames.com/api/?amount=50&region=denmark')
  .then(
    function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            console.log(data);
            var table = document.getElementById("tblbody");
            Array.from(data).forEach(function(person) {
                table.innerHTML += "<tr>" + "<td>" + person.name + "</td>" + "<td>" + person.surname + "</td>" + "<td>" + person.gender + "</td>" + "</tr>";
            });
            var textarea = document.getElementById("sql");
            sqlize(data).forEach( function(row) {
                textarea.innerHTML += row + "\n";
            });
        });
    })
        .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

function sqlize(data) {
    var sqlOutput = [];
    Array.from(data).forEach(function(person) {
        sqlOutput.push("INSERT INTO names (name,surname,gender) VALUES (" + person.name + "," + person.surname + "," + person.gender + ")");
    });
    return sqlOutput;
}
