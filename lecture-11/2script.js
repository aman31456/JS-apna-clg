// Practice Questions

let data = "website data";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data =", data);
    }
}
let student1 = new User("Aman","aman@gmail.com");
console.log(student1);
student1.viewData();

let student2 = new User("Rahul","rahul@gmail.com");
console.log(student2);
student2.viewData();



class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "new data";
    }
}
let admin1 = new Admin("admin","admin@gmail.com");
console.log(admin1);
admin1.editData();   //admin1 object editData() ko call karega call karte hi data ki value "new data" set ho jayegi after that check the value of data by printing it.
console.log(data);
