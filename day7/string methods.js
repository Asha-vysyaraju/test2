var arr=[1,2,3,4,5,6,7,8,9,10]
arr.push(11)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(0)
console.log(arr)
arr.shift()
console.log(arr)

console.log(arr.slice(2,5))
console.log(arr.slice(2))
// splice old array is effected
var fruits=['apple','banana','mango','grapes','pineapple']
fruits.splice(2,2,'kiwi','papaya')
console.log(fruits)
fruits.splice(3,1)
console.log(fruits)
