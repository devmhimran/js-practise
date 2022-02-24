

const nums = [12,20,25,2,6,9,32,65,24,5,16];
// const nums = [5,3,2,9,8,4,6];
const numSort = nums.sort(function(a,b){
    return a - b;
});
// const numReverse = nums.revrse();
console.log(numSort);

const names = ['Mahmud', 'Imran', 'Torikul', 'Abu', 'Raahim', 'Mamun'];
const sortName = names.sort();
const namesReverse = names.reverse();
console.log(namesReverse);