/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// 1) Array Filter.
var namesArray = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var filteredNamesArray = namesArray.filter(namesArray => namesArray.length <= 3);

console.log("Unfiltered array: " + namesArray);
console.log("Filtered array: " + filteredNamesArray);


// 2) Array map.
var uppercasedNamesArray = namesArray.map(function (x) { return x.toUpperCase() });
console.log("Uppercased array: " + uppercasedNamesArray);


// 3) Array as HTML List.
function generateHtmlList(array) {
    var finalResult = "";
    for (var i = 0; i < array.length; i++) {
        array[i] = "<li>" + array[i] + "</li>";
    }

    var string = array.join("");
    return string;

}
console.log("<ul>" + generateHtmlList(namesArray) + "</ul>");



// 4) Cars Array.
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var newerThan1999 = cars.filter(cars => cars.year > 1999);
var volvosOnly = cars.filter(cars => cars.make === "Volvo");
var priceBelow5000 = cars.filter(cars => cars.price < 5000);

// Three refactored methods:
function getNewerCarsThan(desiredYear){
    var result = cars.filter(cars => cars.year > desiredYear);
    return result;
}

function getSpecificMake(make){
    var result = cars.filter(cars => cars.make === make);
    return result;
}

function getCarsCheaperThan(maxPrice){
    var result = cars.filter(cars => cars.price < maxPrice);
    return result;
}

// Refactored into one filtering method:
function filterCarsArray(filterType, filterValue){
    if (filterType != "newerThan" || filterType != "specificMake" || filterType != "cheaperThan")
        console.log("Available options for filterCarsArray method: newerThan, specificMake, cheaperThan");

    if (filterType === "newerThan"){
        var result = cars.filter(cars => cars.year > filterValue);
        return result;
    } 

    if (filterType === "specificMake"){
        var result = cars.filter(cars => cars.make === filterValue);
        return result;
    }

    if (filterType === "cheaperThan"){
        var result = cars.filter(cars => cars.price < filterValue);
        return result;
    }
}

console.log(filterCarsArray("specificMake", "Ford"));

