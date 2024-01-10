// map function
// filter function
// reduce function 
//are higher order functions-- function inside a function, function taking function as parameter

//map function-- map(()=>{}) // map(function(){}) // map(myfunc)
// filter function --filter (()=>{})


// var arr=[2,3,4,5,6,7,8,9]
// create an array with square of elemnts
// var newarr=[]
// // using forEach
// arr.forEach((item)=>{
//     newarr.push(item*item)
// })
// console.log(newarr)

// using map
//map func creates a new array with the results of calling a function for every array 
// var narr=arr.map((num)=>{return num*num})
// console.log(narr)


// given an array of numbers return a new array that has the elemnts multiplied by the index

//var arr=[1,2,3,4,5,6,7,8,9,10]
// var newarr=arr.map((num)=>
// {
//     var index=arr.indexOf(num)
//     return num*index
// })
// console.log(newarr)

// var index=-1
// var newarr=arr.map((item)=>{
//  index++
//  return index*item
// })
// console.log(newarr)

// pass index as second parameter

// var newarr=arr.map((item,index)=>{
 
//  return index*item
// })
// console.log(newarr)

// given array of numbers ,return a new array that has all even numbers
// sum of all numbers in the array

// var arr=[1,2,3,4,5,6,7,8,9,10]

// var evenarr=[]
// arr.map((num)=>{
//     if(num%2==0){
//         evenarr.push(num)
//     }
// })
// console.log(evenarr)

// var sum=0
// var sumarr=arr.map((num)=>{
//     sum+=num
// })
// console.log(sum)

// given an array fo numbers return a array containing its factorial

var arr=[0,1,2,3,4,5,6,7,8,9,10]
var factarr=arr.map((num)=>{
    if(num==0){
        return 1
    }else{
    var fact=1
    for(var i=1;i<=num;i++){
     fact=fact*i
    }
    return fact
}
})
console.log(factarr)