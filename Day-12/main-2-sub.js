

const num = [10, 30, 50, 20, 60];
// const index = num.indexOf(66);

console.log(num.indexOf(60));
console.log(num);
// for( const nums of num ){
//     if( nums.indexOf(60) != -1 ){
//         console.log('Does not Exist');
//     }
// }
// if( num.indexOf(6) == -1 ){
//     console.log('Does not exsit');
// }

const array = [];
for( const nums of num ){
    if( nums.indexOf(6) != -1 ){
        array.push(nums);
    }
}
console.log(array);