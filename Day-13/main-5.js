
function add1( num1, num2 ){
    return num1+num2;
}

const add2 = function add2( num1, num2 ){
    return num1+num2;
}

const add3 = function ( num1, num2 ){
    return num1+num2;
}

const add4 = (num1, num2) => num1+num2;

const sum1 = add1( 5, 7 );
const sum2 = add2( 6, 2 );
const sum3 = add3( 5, 7 );
const sum4 = add4( 4, 5 );
console.log(sum4);