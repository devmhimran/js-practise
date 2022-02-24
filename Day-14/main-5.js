

class Support{

    // name;
    designation = 'Support Web Dev';
    constructor(n, address){
        this.name = n;
        this.address = address;
    }
    supportSystem(){
        console.log(this.name,'\'s Support Start');
    }

}

const john = new Support('john', 'Dhaka');
john.supportSystem();
console.log(john);