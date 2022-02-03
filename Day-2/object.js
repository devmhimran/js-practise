const car = {
    type: 'Fiat',
    model: 500,
    color: 'Blue',
    start: function(){
       this.drive(); 
        console.log("Car Start")
    },
    drive: function(){
        console.log("Car Drive")
    }
}
console.log(car["model"]);
car.start();

let num = new Number(5);
console.log( num);
