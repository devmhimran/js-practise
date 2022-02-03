


function arraySolution(arrayNums){
    
    let large = arrayNums[0];
    for(let i = 0; i<arrayNums.length;i++){
        let num =  arrayNums[i];
        if(num > large){
            large = num;
        }
    }
    return large;
}

function arrayMin(arrayMinnum){
    
    let large = arrayMinnum[0];
    for(let i = 0; i<arrayMinnum.length;i++){
        let num =  arrayMinnum[i];
        if(num < large){
            large = num;
        }
    }
    return large;
}

var arrayNum = [100,50,65,44,39,17,61,87];
var output = arraySolution(arrayNum);
var output2 = arrayMin(arrayNum);
console.log(output);
console.log(output2);

