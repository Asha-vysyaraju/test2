// Datatyppes --String,Number,Boolean,Objects,Array,Undefined,Nan
//Strings
const name='Asha'
var str="Hello world"
for(let i=0;i<str.length;i++){
console.log(str[i])
}
console.log(name+str)

//number
var a=10
console.log(name+a)

// boolean
var b=false
if(!b){
    console.log("true")
}

//Onbjects
var obj={
    name:{
    firstname:"Asha",
    lastname:"vysyaraju"},
    age:10,
    address:"hyderabad",
    hobbies:["singing","dancing","coding"]
}
console.log(obj.name.lastname)
console.log(obj.hobbies[1])
for(let k=0;k<obj.hobbies.length;k++){
console.log(obj.hobbies[k])
}
// to get the keys of objects--for in
for(let key in obj){
    console.log(key)
    console.log(obj[key])// values of object
}
// to get the keys of objects--Object.keys()
console.log(Object.keys(obj))
// JSON
var arr=[
    {name:"dravid",age:10},
    {name:"sachin",age:10},
    {name:"Rahul",age:10},
]
console.log(arr[2].name)

var arr1=["Ankit","singth",10,"delhi",true,["sinding","dancing","coding"]]
console.log(arr1[5][2])
// gives the indexes--for in
for(let c in arr1){
    console.log(c)
}
// gives the values-- for of
for(let d of arr1){
    console.log(d)
}
