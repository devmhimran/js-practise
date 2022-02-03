

const arr = [
    10,
    20,
    30,
    40,
    50
];
let txt ='';
arr.forEach(myFunc);
// console.log(txt);
function myFunc( value, index, array ){
    txt = txt+ value ;
}

let x = 1, y=2;

for( let i=0; i<5; i++ ){
    x= x+y;
    // console.log(x);
}

const obj = 
{
    name: 'Mahmud Hasan',
    lastName: 'Imran',
    age: '23',
    gender: 'M'
};
for( let x in obj ){
    console.log(obj[x]);
}