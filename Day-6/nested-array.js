

var array = [

    ['Imran', 50],
    ['Mamun', 51],
    ['Tesla', 80],

];

for( let i = 0; i<array.length; i++ ){
    console.log(array[i][i]);
}
function getReminder(number1, number2) {
 return number1 % number2;
}

const reminder = getReminder(12, 2);

console.log(reminder);


function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
   }
   
   var result = addNumber(5, 4);
   console.log(typeof(result));