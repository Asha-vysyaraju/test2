function changeColor(text){
text.style.color="red";
}
function normalColor(text){
    text.style.color="black";
}

function readValue(){
        let value=prompt("enter a value")
document.getElementById('txt').innerHTML=value}
   
function findCordinates(event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("xCord").innerHTML = "Mouse X-coordinate is: "+x;
    document.getElementById("yCord").innerHTML = "Mouse Y-coordinate is: "+y;
}

function countLength(content){
let c=content.value.length;
document.getElementById("count").innerHTML=c
}

function convertToBinary() {
    let x=document.getElementById("num").value
// let bin = 0;
//     let rem, i = 1; 
//     while (x != 0) {
//         rem = x % 2;
        
//         x = parseInt(x / 2);
//         bin = bin + rem * i;
//         i = i * 10;
   // }
    let bin =Number(x).toString(2)
    let hex = Number(x).toString(16);
    document.getElementById("binary").innerHTML=`The binary value  is ${bin} and hexadecimal value is ${hex}`
}