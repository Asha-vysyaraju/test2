// console.log(window.document.location)
// console.log(document.location)
// window.open("http://www.google.com","_blank")
// localStorage.setItem('name','Asha')
// console.log(localStorage.getItem('name')) 
// console.log(localStorage.getItem('authToken')) 


// session storage will be deleted once u close the website
// sessionStorage.setItem('name','Asha') 
// console.log(sessionStorage.getItem('authToken'))

// alert("bjkjkfdsgkj")
// let nam=prompt("Please enter your name")
// console.log(nam)

// let button=confirm("confirm your answer")
// console.log(button)
// setTimeout(()=>{
// console.log("settime")
// alert("login")
// },3000)

const showAlert=()=>{
    alert("Heloo")
}

const login=()=>{
    let uname=document.getElementById("uname").value
    let password=document.getElementById("pwd").value
   
    
    if(uname=="Asha" && password=="Asha1234"){
 
        
   
    location.href="./home.html";
    // window.open("./home.html","_blank")
 }
   else
   {alert("Password and/or Username is Incorrect.")}}

   const register=()=>{
    // window.open("http://www.google.com","_blank")
    window.open("./home.html","_blank")
    
   }
