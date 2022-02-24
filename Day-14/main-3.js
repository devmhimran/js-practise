


const nums = [5,4,8,9,4,2,3];

output = [];

function doubleIt(num){
    const resultDouble = num * 2;
    return resultDouble;
}

for( const num of nums ){
   const double = doubleIt(num);
   output.push(double);
   console.log(double);
}
