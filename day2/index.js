// find the minimum element elment from the array
const arr=[3,4,9,1,6]
// arr.sort()
// console.log(arr)
// console.log("The minimum array element is"+arr[0])
 var min=arr[0]
 for(i=0;i<arr.length;i++){
    if(arr[i]<min){
      min  =arr[i]
    }
 }
 console.log(min)
 n=3
 var saving
 var sav=[]
 sav[0]=1000
 sav[1]=1000
 for(i=2;i<=n;i++){
     saving=sav[i-2]+sav[i-1]
     sav.push(saving)
 }
 var total=0;
for(i=0;i<=n;i++){
    total=total+sav[i]
}
console.log(total)