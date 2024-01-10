// reduce function-- it creates a single value from an array
 var arr=[1,2,4,5,6,7,8,9,10]
 // 1st case: when 2nd parameter is not passed, intial accumulator will be first item item will be 2nd item
 // performs the lines and stores in accumulator and item moves to next elemnts , when item reaches end of array reduce will return acc
 var sum=arr.reduce((acc,item)=>{
return item+acc
 })
 console.log(sum)
 var mul=arr.reduce((curr,acc)=>{
    return curr*acc
     })
     console.log(mul)

     //2nd case: when 2nd parametere Initial value is passed , then acculator is initial value and current value is first element
     var sum1=arr.reduce((curr,acc)=>{return curr+acc},0)   
     console.log(sum1)

     // ex string=['hello','world','how','are','you']---- hello world how are you
     var str=['hello','world','how','are','you']
     var sentence=str.reduce((cur,item)=>{
        return cur + " "+item
    }
     )
     console.log(sentence)
        

