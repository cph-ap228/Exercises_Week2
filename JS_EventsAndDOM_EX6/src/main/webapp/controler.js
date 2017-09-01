function clickHandler(e){
    var div = e.target;


    //var display = document.getElementById("display").innerHTML;
    var display = document.getElementById("display");
//    console.log(div.innerHTML);
    // document.getElementById("calculate").onclick = function(e) {
    //     if(e && e.stopPropagation && div.id != "calculate")
    //     {
    //         e.stopPropagation();
    //     }
    //     else if (div.id == "calculate")
    //     {
    //           e = window.event;
    //           e.cancelBubble = true;
    //     }
    // }

    display.innerText += div.innerHTML;

   // display.innerHTML = (div.valueOf("buttons"));
}

function mats(){
    let result;
    var display = document.getElementById("display");
    var numbers = document.getElementById("display").innerHTML;
    // console.log(numbers);

//    console.log("1: " + display);
//    console.log("2: " + numbers.length);

    if(numbers.indexOf('+')) {
        numbers = numbers.split('+');
        result = 0;
        numbers.forEach(function(number) {
            result = result + Number(number);
        });
    } else if(numbers.indexOf('-')) {
        result = numbers.split('-')
    }
    console.log(result);


//    numbers.splice( 1, numbers.indexOf(".") );
//
//    console.log(numbers);
    display.innerHTML = result;
}

Array.from(document.getElementById("buttons").children).forEach(function(button) {
    button.onclick = clickHandler;
});

document.getElementById("calculate").onclick = mats;