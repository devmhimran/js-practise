

function add1( a, b ){
    return a+b;
}

const add2 = function add2( a, b ){
    return a+b;
}

const add3 = function ( a, b ){
    return a+b;
}

const add4 = ( a,b ) => a+b;

const sum1 = add1( 5,4 );
const sum2 = add2( 7,6 );
const sum3 = add3( 5,7 );
const sum4 = add4( 4, 21 )
console.log(sum4);