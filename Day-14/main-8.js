class AllDetails{
    name;
    designation;
    address;
    constructor(name, designation, address){
        this.name = name;
        this.designation = designation;
        this.address = address;
    }
}

class Support extends AllDetails{
    supportTime;
    constructor(name, designation, address,time){
        super(name, designation, address);
        this.supportTime = time;
    }
    SupportTime(){
        console.log('Support Session is',this.name);
    }
}

class Student extends AllDetails{

    classStart(time){
        console.log( time,'This is',this.name,'class');
    }
}

class Neptune extends AllDetails{

    versionRealse(versionNo){
        console.log('Release version no',versionNo );
    }
}

const john = new Support('John', 'Support','BD','11pm');
john.SupportTime();
console.log(john);