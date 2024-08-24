const student = {
    fullName : "aman thakur",
    marks : 94.5,
    printMarks : function() {
          console.log("marks =",this.marks);
    },
};
console.log(student.printMarks());

const employee = {
    calcTax1() {
        console.log("Tax rate is 10%");
    },
    calcTax2 : function(){
        console.log("tax rate is 10%");
    }
};
console.log(employee.calcTax1());
console.log(employee.calcTax2());

const karanArjun = {
    salary:5000,
    calcTax1(){
        console.log("tax is 30%");
    }
};
const karanArjun2 = {
    salary:5000,
};
const karanArjun3 = {
    salary:5000,
};
const karanArjun4 = {
    salary:5000,
};
karanArjun.__proto__ = employee;  // karanArjun object ke prototype mein employee object ke calcTax1 aur calcTax2 function add ho jayenge , iske baad hum directly karanArjun.calcTax1() se function ko access kar sakte hain. 
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

console.log(karanArjun.calcTax1()); // humne calcTax1 function karanArjun object ke andar bhi define kiya hai aur same calcTax1 funtion ko karanArjun ke prototype me bhi add kiya hai , so here in that case if object and prototype has same method(funtion) than object method will be used first 
console.log(karanArjun.calcTax2());

class ToyotaCar {
    constructor(){
        console.log("creating new object");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
console.log(fortuner.start());

let nexus = new ToyotaCar();

console.log(nexus);
console.log(nexus.start());

console.log(fortuner);

class MarutiSuzuki{
    constructor(brand,mileage){
        console.log("object is created")
        this.brandName = brand;
        this.mileage = mileage;
    }
};
let swift = new MarutiSuzuki("Swift",12);
console.log(swift);
let wagonr = new MarutiSuzuki("WagonR",10);
console.log(wagonr);

// Inheritance in javascript

class Parent {
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{}

let obj = new Child();
console.log(obj.hello());

class Person{
    constructor(){
        console.log("Enter in Parent constructor");
        this.species = "homosapians" ;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{
    constructor(branch) {
        console.log("enter in child constructor");
        super();  // super() keyword is used to call the super constructor (constructor of parent class/super class) before using 'this' keyword.  
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("solve Problems");
    }
}
let engObj = new Engineer("chemical engineer");
console.log(engObj);


class Person1{

    constructor(name){
        console.log("enter in parent constructor");
        this.species = "Homosapians";
        this.name = name;
        console.log("exit the parent constructor");
    }

    eat(){
        console.log("eat");
    }
}
class Engineer1 extends Person1{
    constructor(name){
        console.log("enter in child constructor");
        super(name);
        console.log("exit the child constructor");

    }
    work(){
        super.eat();
        console.log("Solving Problems");
    }
}
let engObj1 = new Engineer1("Aman");
console.log(engObj1);
engObj1.work();
console.log(engObj1.work());
