/**
 * Functions
 */

function getRequest(id) {
    var xmlhttp = new XMLHttpRequest();
    let response;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            response = JSON.parse(xmlhttp.responseText)[0];

            console.log(response);

            let list = document.getElementById("shit-list");
            Array.from(list.children).forEach(function(item) {
                switch(item.id) {
                    case "country":
                        item.innerHTML = "Country: " + response.name;
                        break;
                    case "population":
                        item.innerHTML = "Population: " + response.population;
                        break;
                    case "area":
                        item.innerHTML = "Area: " + response.area;
                        break;
                    case "borders":
                        item.innerHTML = "Borders: " + response.borders;
                        break;
                    default:
                        break;
                }
            });
        }
    };

    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + id;

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}

/**
 * Start
 */

var countries = document.getElementsByTagName("path");
// console.log(countries);

Array.from(countries).forEach(function(country) {
    country.addEventListener( "click", function() {
        let response = getRequest(country.id);
        Array.from(countries).forEach(function(country) {
            country.style.fill = "#c0c0c0";
        });
        country.style.fill= "red";
    });
});
