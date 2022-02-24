


function arrayNameLengthCheck(names){
    if( Array.isArray(names) == true){
        let biggerName = names[0];
        for( const friend of names ){
            if( biggerName.length < friend.length){
                biggerName = friend;
            }
        }
        // return biggerName;
    }else{
        // return 'please enter a valid array!!!'.toUpperCase();
    }
    
   
    
}



const allNames = ['Mahmud', 'imran', 'Torikul', 'Abu', 'Raahim', 'Goda Mamun'];
const output = arrayNameLengthCheck(1250);
// console.log(output);


if( allNames.includes('ImraN'.toLocaleLowerCase()) ){
        console.log('Exists');
    }else{
        console.log('Not Exists');
    }
