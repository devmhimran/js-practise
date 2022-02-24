
const add = ( a, b) => a+b;
const sum = add(4,5);


const add1 = (a,b,c) => a+b+c;
const sum1 = add1(1,5,3);


const add2 = (num) => num*2;
const sum2 = add2(3);



const add3 = num => num*2;
const sum3 = add3(5);



const add4 = () => 'This name of john doe';
const sum4 = add4();
// console.log(sum4);


const add6 = ( a,b ) => {
    const sums = a + b;
    const subs = a-b;

    const result = sums - subs;
    return result;
}

const sum6 = add6(20, 2);
console.log('sum of 6',sum6);