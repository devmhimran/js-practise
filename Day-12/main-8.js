
function arrayNum(){
    let sum = 0;
    for( const nums of arguments){
        sum = sum + nums;
    }
    return sum;
}

const sum = arrayNum(5, 7 ,6, 10, 28, 12);
console.log(sum);


function getFullname(){
    let firstName = '';
    for( const name of arguments ){
        firstName = firstName + ' ' + name;
    }
    return firstName;
}
const name =  getFullname('mahmud', 'hasan', 'Imran');
console.log(name);