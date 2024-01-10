// function abc(){
//     var a=10;
// }
// abc();
// console.log(a) // a is undefined


//arrow function
// var a=() =>{
//     console.log("hello")
// }
// a()

// const a=(a) =>{
//     console.log(a)
// }
// a(3)


// let arr=[1,2,3]
// let arr1=[4,5,6]
// let arr2=[arr,arr1]
// console.log(arr2) // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] // nested array -- array inside array
// [1,2,3,4,5,6]
// 1.forloop
// let arr3=[]
//  for(var i=0;i<arr.length;i++){
//     arr3.push(arr[i])
//  }
//  for(var i=0;i<arr1.length;i++){
//     arr3.push(arr1[i])
//  }
//  console.log(arr3) // [ 1, 2, 3, 4, 5, 6 ]

// 2. inbuilt function --concat()
// let arr3=arr1.concat(arr1)
// console.log(arr3) // [ 1, 2, 3, 4, 5, 6 ]

// spread operator -- joining arrays using spread
// const sweetfruit=['mango','apple' ,'banana']
// const sourfruits=['lime','lemon','grapefruit']
// const fruits=[...sweetfruit,...sourfruits]
// console.log(fruits); // [ 'mango', 'apple', 'banana', 'lime', 'lemon', 'grapefruit' ]
// const fruit=[...sweetfruit,sourfruits]
// console.log(fruit); // [ 'mango', 'apple', 'banana', [ 'lime', 'lemon', 'grapefruit' ] ]

// deconstructing arrays
// const sweetfrut=['mango','apple' ,'banana']
// const [a,,c]=sweetfrut
// const [,b,]=sweetfrut
// const [,...rest]=sweetfrut
// // const[...r,]=sweetfrut // Rest element must be last element -- to do this reverse array and use rest later
// console.log(a) // mango
// console.log(c) // banana
// console.log(b) // apple
// console.log(rest) // [ 'apple', 'banana' ]

// let ab=[1,2,3,4,5,6,7,8,9]
// let d=ab
// ab.push(10)
// console.log(d)// any change in array will be shown here [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
   
//    const str=['a','b','c','d','e','f','g','h','i','j']
//    const [,c,...d]=str
//    console.log(c)
//    console.log(d)
//    const str=['a','b','c',['d','e','f','g','h','i','j']]
//    const [,c,d,[,,y]]=str
//    console.log(c) // b
//    console.log(d) // c 
//    console.log(y) // f

// const str=['a','b','c',['d','e','f','g','h','i','j'],'p']
// //    const [,c,d,[...y],p]=str
// //    console.log(y) // [ 'd', 'e', 'f', 'g', 'h', 'i','j']
//    const [,c,d,...rest]=str
//    console.log(rest[1]) // p
//    console.log(rest[0]) // [ 'd', 'e', 'f', 'g', 'h', 'i','j']
//    console.log(rest[0][4]) // h

// destructuring objects
// const obj={
//     a:1,
//     b:2,
//     c:3
// }
// //const {a,...rest}=obj // a should be same as key a in obj
// //console.log(rest) -- { b: 2, c: 3 }
// const {c,...rest}=obj
// console.log(rest) //--{ a: 1, b: 2 }
// console.log(c) // 3

// var a=1
// var b=2
// var c=3
// // object shorthand
// const obj={a ,b ,c}
// const obj1={p:a ,q:b ,r:c}
// console.log(obj) //-- { a: 1, b: 2, c: 3 }
// console.log(obj1) // -- { p: 1, q: 2, r: 3 }
 //const obj={a:1,b:2,c:3}
//  const {a,b,c}=obj
//  console.log(a)
//  const {a,b:random,c}=obj
//  console.log(random) //  --2

//  const obj={a:1,b:2,c:3,g:45}
//  const {g:random,...c}=obj
// console.log(random) // 45
// console.log(c) // { a: 1, b: 2, c: 3 }

// template literals
// const n="john"
// const age=30
// console.log("My name is "+ n + "and age is"+age)

// // `` -- backtick
//  const str=`hello world`
//  const num=74
//  const num1=7
//  console.log(str)
//  console.log(`  ${str}  `) //   hello world
//  console.log(`  ${str}   ${num}`)  //   hello world   74
//  console.log(`  ${str}   ${num+num1}`) //  hello world   81
//  console.log(`  ${str}   ${num>num1}`) //  hello world   true


// JSON destructuring

const obj = {"menu": {
    "header": "SVG Viewer",
    "items": [
        {"id": "Open"},
        {"id": "OpenNew", "label": "Open New"},
        null,
        {"id": "ZoomIn", "label": "Zoom In"},
        {"id": "ZoomOut", "label": "Zoom Out"},
        {"id": "OriginalView", "label": "Original View"},
        null,
        {"id": "Quality"},
        {"id": "Pause"},
        {"id": "Mute"},
        null,
        {"id": "Find", "label": "Find..."},
        {"id": "FindAgain", "label": "Find Again"},
        {"id": "Copy"},
        {"id": "CopyAgain", "label": "Copy Again"},
        {"id": "CopySVG", "label": "Copy SVG"},
        {"id": "ViewSVG", "label": "View SVG"},
        {"id": "ViewSource", "label": "View Source"},
        {"id": "SaveAs", "label": "Save As"},
        null,
        {"id": "Help"},
        {"id": "About", "label": "About Adobe CVG Viewer..."}
    ]
}}

const {...c}=obj.menu.items
console.log(c)

const {menu:{items}}=obj
//console.log(items)
// displaying all ids which have labels
for(let i of items){
    if(i && i.label){
        console.log(i.id)
    }
}

 var arr=[1,2,3,4]
 sum=0
  arr.forEach((items=>console.log(items)))
  arr.forEach(items=>
    {sum+=items}
    )
  console.log(sum)