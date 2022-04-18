
let outputscreen = document.getElementById("result");

function dis(num){
 outputscreen.value += num;
}

function solve(){
    outputscreen.value = eval(outputscreen.value);
}

function clr(){
    outputscreen.value = "";
}