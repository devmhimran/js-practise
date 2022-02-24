

class CarDetail{
    name;
    color;
    address;
    date;
    constructor( carName, carColor, carAddress, carDate ){
        this.name = carName;
        this.color = carColor;
        this.address = carAddress;
        this.date = carDate;
    }
    realseDate(){
        console.log(this.name, 'realse on', this.date);
    }
}


const marcedes = new CarDetail( 'marcedes', 'White', 'USA', '20/04/2011');
marcedes.realseDate();
console.log(marcedes);