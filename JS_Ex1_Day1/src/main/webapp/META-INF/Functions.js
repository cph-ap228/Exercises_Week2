/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//     JAVASCRIPT FUNCTIONS
// 1)       Function declaration
function add(n1, n2) {
    return n1 + n2;
}

// 1)      Function expression
var sub = function (n1, n2) {
    return n1 - n2
}

// // 1)     Callback 
// var cb = function (n1, n2, callback) {
//     return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
// };


// // 2)     Output
// console.log(add(1, 2))     // 3.
// console.log(add)          // Function name.
// console.log(add(1, 2, 3)); // 3.
// console.log(add(1));	  // NaN since not enough arguments are provided.
// console.log(cb(3, 3, add)); // Structured string with results after addition. (6)
// console.log(cb(4, 3, sub)); // Structured string with results after subtraction (1)
// console.log(cb(3, 3, add())); // Won't print anything, will cause an error because function cannot be used in a callback.
// console.log(cb(3, "hh", add)); // Nothing, because it only accepts numbers into operation, "hh" is a string.


// 3)     Error Handling
// 3)     Rewritten Callback:
var rewrittenCb = function (n1, n2, callback) {
    try {
        if (typeof n1 === 'number' && typeof n2 === 'number') {
            if (typeof callback === 'function') {
                return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
            } else {
                throw new Error("Callback failed because function is not declared or not a function");
            }
        } else {
            throw new Error("Callback failed because function is not declared or not a function");
        }
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }
};


// 3)     Checking if error handling is correct:
console.log(add(1, 2))     // 3.
console.log(add)          // Function name.
console.log(add(1, 2, 3)); // 3.
console.log(add(1));	  // NaN since not enough arguments are provided.
console.log(rewrittenCb(3, 3, add)); // Structured string with results after addition. (6)
console.log(rewrittenCb(4, 3, sub)); // Structured string with results after subtraction (1)
console.log(rewrittenCb(3, 3, add())); // Won't print anything, will cause an error because function cannot be used in a callback.
console.log(rewrittenCb(3, "hh", add)); // Nothing, because it only accepts numbers into operation, "hh" is a string.


// 4)   Multiply Function
function mul(n1, n2) {
    return n1 * n2;
}

// 5)   Callback
console.log(rewrittenCb(3, 4, mul));

