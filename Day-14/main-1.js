

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

// const output = myObject.price.secondHand;
const { secondHand} = myObject.price;
console.log(secondHand);