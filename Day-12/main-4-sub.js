

const allNames = ['Mahmud', 'Imran', 'Torikul', 'Abu', 'Raahim', 'Goda Mamun'];
const search = 'IMrAn';
for( const friend of allNames  ){
    
    if( friend.toLocaleLowerCase().includes(search)){
        console.log(friend);
    }
    
    
}
console.log('not found');