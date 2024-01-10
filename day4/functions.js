// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var num=parseInt(userInput[0])
var a=userInput[1]
var arr=[]
for(var k=0;k<a.length;i++){
    arr.push(a[k])
}
var c=0;
for(var i=0;i<arr.length;i++){
    for(var j=1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            for(var l=j+1;l>arr.length;l++){
                if(arr[j]>arr[k]){
                    c=c+1
                }
            }
        }
    }
}
console.log(c)
  //end-here
});