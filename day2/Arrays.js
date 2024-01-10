// 2d array
// var arr=[[1,2,3],[4,5,6],[7,8,9]]
// console.log(arr[0])
// console.log(arr[0][1])
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
//         console.log(arr[i][j])
//     }
// }
function matrixmul(arr1, arr2){
  
    if(arr1[0].length !== arr2.length){
        console.log("Matrix multiplication is not possible");
        return;

    }
    var result=[];
    for(var i=0;i<arr1.length;i++){
        result[i]=[];
        for(var j=0;j<arr2[0].length;j++){
            sum=0;
        for(var k=0;k<arr1[0].length;k++)
            {
               sum+=arr1[i][k]*arr2[k][j];
            }
            result[i][j]=sum;
        }
    
    }
    console.log(result);
}
var arr1=[[1,2,3],[4,5,6],[7,8,9]];
var arr2=[[10,11,12],[13,14,15],[16,17,18]];

matrixmul(arr1, arr2);
