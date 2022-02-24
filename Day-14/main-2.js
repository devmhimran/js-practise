

// const [a, b] = [4, 5, 6];
// console.log(b);


const myObject = {
    product : 'Laptop',
    name : 'Acer',
    price : {
        firstHand : 25000,
        secondHand : 21000,
        thirdHand : 14000
    },
    display : '14 inch',
    sound : 'dolby',
    wireless : 'supported'    
}


console.log(myObject?.total?.thirdHand.a);