
var first = 10;
var second = 15;

console.log(first, second);

// var temp = first;
// first = second;
// second = temp;

// console.log(first, second);

[first, second] = [second, first];
console.log(first, second);