// Functions
function add(a,b){
    return a+b

}
console.log(add(3,4))
// write a function to solve the factorial of function
function factorial(n){
    var fact=1
    for(let i=1;i<=n;i++){
        fact=fact*i
    }
    return fact
}
console.log(factorial(6))

// pass by value --variables
var variable=10
a(variable)
function a(num){
    num=num+10
}
console.log(variable)// 10

// pass by reference--objects,array

function abc(arr){
arr[0]=10
arr[1]=20
}
var arr=[1,2]
console.log(arr)
abc(arr)
console.log(arr)