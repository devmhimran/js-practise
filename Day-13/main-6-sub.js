
function add1( a, b){
    return a + b;
}

const add2 = function add2( a, b ){
    return a+b;
}

const add3 = function ( a,b ){
    return a+b;
}

const add4 = ( a,b ) => a + b;

const sum1 = add1( 2, 7 );
const sum2 = add2( 5, 9 );
const sum3 = add3( 7, 11 );
const sum4 = add4( 8, 14 );
console.log(sum4);