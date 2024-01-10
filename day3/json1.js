// output : new open
//save

// var obj = {"menu": {  
//     "id": "file",  
//     "value": "File",  
//     "popup": {  
//       "menuitem": [  
//         {"value": "New", "onclick": "CreateDoc()"},  
//         {"value": "Open", "onclick": "OpenDoc()"},  
//         {"value": "Save", "onclick": "SaveDoc()"}  
//       ]  
//     }  
//   }}

//   for(var i=0;i<obj.menu.popup.menuitem.length;i++){
//     console.log(obj.menu.popup.menuitem[i].value)
//   }
  

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

  
  
  
var obj={"employees":[  
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"},  
    {"name":"Jai", "email":"jai87@gmail.com"}  
]}
  var email=userInput[0];
  var flag=0;
  for(var i=0;i<obj.employees.length;i++){
    if(email==obj.employees[i].email){
        flag=1;
    }
  }
  if(flag==1){
    console.log("yes")
  }else{
    console.log("no")
  }



  //end-here
});

  