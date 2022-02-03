

function arraySum(arraySum){
    sum = 0 ;
    for( let i = 0 ; i< arraySum.length; i++ ){
        sum = sum + arraySum[i];
    }
    return sum;
}
var array = [10,6,1,9];
var output = arraySum(array);
console.log(output);