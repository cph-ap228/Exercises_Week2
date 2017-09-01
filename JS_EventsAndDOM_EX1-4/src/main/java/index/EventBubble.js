/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function clickHandler(e){ 
    var div = e.target;
    console.log("Hi from Maksymilian" + div.id); 
    document.getElementById("text").innerHTML = ("Hi from Maksymilian" + div.id);
    
}  

document.getElementById("outer").onclick = clickHandler;

