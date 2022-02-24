

class Support{
    name;
    designation;
    address;
    constructor( name, designation, address ){
        this.name = name;
        this.designation = designation;
        this.address = address;
    }
    supportSession(time){
        console.log( time, 'This is support session of', this.name );
    }
}

class Student{
    name;
    designation;
    address;
    constructor( name, designation, address ){
        this.name = name;
        this.designation = designation;
        this.address = address;
    }
    classStart(time){
        console.log( time,'This is',this.name,'class');
    }
}

class Neptune{
    name;
    designation;
    address;
    constructor( name, designation, address ){
        this.name = name;
        this.designation = designation;
        this.address = address;
    }
    versionRealse(versionNo){
        console.log('Release version no',versionNo );
    }
}



// const john = new Support('John Doe', 'Support', 'BD');
// john.supportSession('7pm');
// const alia = new Student('Alia', 'Student', 'USA');
// alia.classStart('10pm');
const doe = new Neptune('Doe', 'Developer', 'Amirates');
doe.versionRealse('1.0.5');
console.log(doe);