

var string = 'Amar Shonar Bangla Ami Tomay Valobashi';
var words = string.split(' ');
var splitA = string.split('a');
var slice = string.slice(3,11);
var substr = string.substring(0,6);
// console.log(substr);



var firstStr = 'Bangla';
var secondStr = 'Desh';
// var fullStr = firstStr + secondStr;
var fullStr = firstStr.concat(secondStr).concat(' New Concat').concat(' ').concat('Again Concat');
// console.log(fullStr);

const word = ['a', 'b', 'c', 'd', 'e'];
// const word = [1,2,3,4,5];
// const allJoin = word.join(',');
const allJoin = word.join('||');
console.log(allJoin);


