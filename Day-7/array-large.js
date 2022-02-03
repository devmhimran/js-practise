


function arrayLarge(arrayNum){
    let large = 0;
    
    for( let i = 0; i<arrayNum.length;i++ ){
        let elements = arrayNum[i];
        if(large < elements){
            large = elements
        }
    }
    return large;
}


var num = [10,5,8,7,3];
var output = arrayLarge(num);
console.log(output);