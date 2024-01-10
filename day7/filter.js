// filter function --returns either true or false, it creates new array 

// var arr=[-1,5,7,-8,9,-2,10]
// var newarr=arr.filter((item)=>{
//     if(item<0)
//     return true
// })
// console.log(newarr)

//given an array of objects of mobies ,new a new array that has all mobies that are released after 2010
// example :{name:movie1,year:2010,rating:4.5}
// 2. ratings greater than 4.5
// 3. strings length greater than 5
// 4.array that has palindrome strings 

// var arr=[
//     {
//         name:"salaar",
//         year:2023,
//         rating:4.8
//     },
//     {
//         name:"rrr",
//         year:2022,
//         rating:4.9
//     },
//     {
//         name:"bahubali",
//         year:2015,
//         rating:4.9
//     },
//     {
//         name:"abab",
//         year:2008,
//         rating:4.3
//     },
//     {
//         name:"paap",
//         year:2009,
//         rating:4.2
//     }
// ]
// var releasearr=arr.filter((item)=>{
//     if(item.year>2010){
//         return true
//     }
// })
// console.log(releasearr)

// var ratingarr=arr.filter((item)=>{
//     if(item.rating>4.5){
//         return true
//     }
// })
// console.log(ratingarr)

// var movies=arr.filter((item)=>{
//     if(item.name.length>5){
//         return true
//     }
// })
// console.log(movies)

// var palmov=arr.filter((item)=>{
//      var rstr=""
//      var str=item.name
//     for(i=str.length-1;i>=0;i--){
//         rstr=rstr+str[i]

//     }


//     if(item.name==rstr){
//         return true
//     }
// })
// console.log(palmov)
var arr=['madam','dad','mom','daasf','dfsfs']
var newarr=arr.filter((item)=>{
    var rev=item.split("").reverse().join("")
    if(item==rev){
        return true
    }
})
console.log(newarr)